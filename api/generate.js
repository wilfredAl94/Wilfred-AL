export default async function handler(req, res) {
  res.status(501).json({
    success: false,
    message: "Runway integration is not implemented yet."
  });
}
