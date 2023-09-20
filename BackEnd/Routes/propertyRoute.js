import { Router } from "express";
const router = Router();

import { DbModel } from "../Model/DbModel.js";

// ---------------- to Save new property ----------------

router.post("/", async (req, res) => {
  try {
    console.log(req.body.address);
    console.log(req.body.typeOfProperty);
    const newDoc = {
      address: req.body.address,
      typeOfProperty: req.body.typeOfProperty,
      price: req.body.price,
      bedrooms: req.body.bedrooms,
      bathrooms: req.body.bathrooms,
      square_feet: req.body.square_feet,
      photos: req.body.photos,
    };

    const doc = await DbModel.create(newDoc);
    console.log("newDoc created");
    return res.status(200).send(doc);
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: error.message });
  }
});

// --------------- to get all properties ---------------------

router.get("/", async (req, res) => {
  try {
    const properties = await DbModel.find({});
    return res.status(200).send(properties);
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: error.message });
  }
});

// --------------------- to get one property by id -------------
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const property = await DbModel.findById(id);
    return res.status(200).send(property);
  } catch (error) {
    console.log(error);
  }
});

// ------------------- to delete all -----------------
router.delete("/delete", async (req, res) => {
  try {
    await DbModel.deleteMany({});
    res.status(200).send({
      message: "Deleted all documents",
    });
  } catch (error) {}
});

export default router;
