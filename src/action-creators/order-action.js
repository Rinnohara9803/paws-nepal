import CryptoJS from "crypto-js";

export const createOrder = async (amount, id) => {
  console.log(amount);
  console.log(id);
  try {
    const signature = createSignature(
      "total_amount=100,transaction_uuid=11-201-13,product_code=EPAYTEST"
    );

    console.log(signature);
    console.log("here");

    const formData = {
      amount: "100",
      failure_url: "https://google.com",
      product_delivery_charge: "0",
      product_service_charge: "0",
      product_code: "EPAYTEST",
      signature: signature,
      signed_field_names: "total_amount,transaction_uuid,product_code",
      success_url: "https://esewa.com.np",
      tax_amount: "10",
      total_amount: "110",
      transaction_uuid: "11-201-13",
    };

    var path = "https://rc-epay.esewa.com.np/api/epay/main/v2/form";

    var form = document.createElement("form");
    form.setAttribute("method", "POST");
    form.setAttribute("action", path);

    for (var key in formData) {
      var hiddenField = document.createElement("input");
      hiddenField.setAttribute("type", "hidden");
      hiddenField.setAttribute("name", key);
      hiddenField.setAttribute("value", formData[key]);
      form.appendChild(hiddenField);
    }

    document.body.appendChild(form);
    form.submit();
  } catch (e) {
    console.log(e.message);
  }
};

export const createSignature = (message) => {
  const secret = "8gBm/:&EnhH.1/q";

  // Convert secret to bytes
  const secretBytes = CryptoJS.enc.Utf8.parse(secret);

  // Generate SHA-256 HMAC
  const hmac = CryptoJS.HmacSHA256(message, secretBytes);

  // Convert HMAC to base64
  const hashInBase64 = CryptoJS.enc.Base64.stringify(hmac);

  return hashInBase64;
};
