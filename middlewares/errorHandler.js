/**
 *
 * @type use custom middleware
 * @param {error handler}
 *
 */

export default function errorHandler(error, req, res, nex) {
  const status = res.statusCode ? res.statusCode : 500;
  res.status(status).json({ message: error.message });
}
