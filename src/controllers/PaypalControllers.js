
import fetch from "node-fetch";

const { PAYPAL_CLIENT_ID, PAYPAL_CLIENT_SECRET } = process.env;

const base = "https://api-m.sandbox.paypal.com";

// update package
import { updatePackageForUserPaypal } from "./UserController";

export const createOrder =  async (req, res, next) => {
  const {product: {description, coast}} = req.body;
  try {
    const order = await createOrderFunction(req.body)
    res.status(200).json(order)
  } catch (err) {
    res.status(500).json(err)
  }
}

// xác nhận thanh toán, gửi dữ liệu về
export const capturePayment = async (req, res) => {
  const {orderID} = req.body
  try {
    const captureData = await capturePaymentFunction(orderID)
    console.log(captureData)

    // cập nhật lại thông tin người dùng ở đây
   await updatePackageForUserPaypal(req.body)

  } catch (err) {
    res.status(500).json(err)
  }
}


// FUNC for PAYPAl
async function createOrderFunction(data) {
  const {product: {description, cost}} = data; // nếu truyền vào hàm này req.body thì nó sẽ nhận req.body

  const accessToken = await generateAccessToken();
  const url = `${base}/v2/checkout/orders`;
  const response = await fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: cost,
          },
        },
      ],
    }),
  });

  // update Database
  return handleResponse(response);
  
}

async function capturePaymentFunction(orderID) {
  const accessToken = await generateAccessToken();
  const url = `${base}/v2/checkout/orders/${orderID}/capture`;
  const response = await fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });

  // UPdated DATABASE HERE
  return handleResponse(response);
}


/**
 * Generate an OAuth 2.0 access token
 * 
 */
export async function generateAccessToken() {
  const auth = Buffer.from(
    PAYPAL_CLIENT_ID + ":" + PAYPAL_CLIENT_SECRET,
  ).toString("base64");
  const response = await fetch(`${base}/v1/oauth2/token`, {
    method: "post",
    body: "grant_type=client_credentials",
    headers: {
      Authorization: `Basic ${auth}`,
    },
  });
  const jsonData = await handleResponse(response);
  return jsonData.access_token;
}


/**
 * Generate a client token
 * 
 */
export async function generateClientToken() {
  const accessToken = await generateAccessToken();
  const response = await fetch(`${base}/v1/identity/generate-token`, {
    method: "post",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Accept-Language": "en_US",
      "Content-Type": "application/json",
    },
  });
  console.log("response", response.status);
  const jsonData = await handleResponse(response);
  return jsonData.client_token;
}
// hàm gửi thông báo

async function handleResponse(response) {
  if (response.status === 200 || response.status === 201) {
    return response.json();
  }

  const errorMessage = await response.text();
  throw new Error(errorMessage);
}
