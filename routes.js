const express = require('express');
const router = express.Router();

const whitePixel = 'R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs=';

const getPixelResponse = (res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Content-type', 'image/gif');
  res.end(Buffer.from(whitePixel, 'base64'));
}

const getMaxAge = () => 60 * 60 * 24 * 1000 * 365;

const cookieName = 'myCookie';

router.get('/auth', function(req, res, next) {
  if (!req.cookies[cookieName]) {
    res.cookie(cookieName, 'test', {
      maxAge: getMaxAge(),
      httpOnly: false,
      domain: 'localhost',
      secure: true,
      sameSite: 'none'
    });
  }

  getPixelResponse(res);
});

router.get('/test', function(req, res, next) {
  if (!req.cookies[cookieName]) {
    //Do something
  }

  getPixelResponse(res);
});

module.exports = router;