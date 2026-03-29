import express from "express";
import cors from "cors";
import axios from "axios";

const MOCK_API =
  process.env.MOCKAPI_PRODUCTS_URL ??
  "https://69bba5a60915748735b9c879.mockapi.io/shop/shop";

const PORT = Number(process.env.PORT ?? 3001);

const app = express();
app.use(cors({ origin: true }));

app.get("/health", (_req, res) => {
  res.json({ ok: true });
});

app.get("/api/products", async (_req, res) => {
  try {
    const { data } = await axios.get<unknown>(MOCK_API);
    res.json(data);
  } catch {
    res.status(502).json({ error: "Failed to fetch products" });
  }
});

app.listen(PORT, () => {
  console.log(`Backend listening on http://localhost:${PORT}`);
});
