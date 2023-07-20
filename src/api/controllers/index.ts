import { Request, Response } from "express";
import admin from "firebase-admin";
import serviceAccount from "../../../FirebaseConfig.json";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
});

export const FCMController = {
  pushNotification: async (req: Request, res: Response) => {
    try {
      const { token } = req.body;
      const messaging = admin.messaging();
      var payload = {
        notification: {
          title: "hello",
          body: "world",
        },
        // token, <-- Remove this line from the payload
      };

      messaging
        .sendToDevice(token, payload) // Add token here
        .then((response) => {
          console.log("Successfully sent message:", response);
          res.send("Notification sent successfully.");
        })
        .catch((error) => {
          console.log("Error sending message:", error);
          res.status(500).send("Error sending notification.");
        });
    } catch (err) {
      res.send(err);
    }
  },
};
