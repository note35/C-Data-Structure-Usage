#!/bin/sh

browserify=./node_modules/browserify/bin/cmd.js
watchify=./node_modules/watchify/bin/cmd.js
nodemon=./node_modules/nodemon/bin/nodemon.js

srcdir=$(pwd)
blddir=${BLDDIR:-$srcdir/build}

pubdir=$blddir/public
clientjs=$blddir/client.js
serverjs=$blddir/server.js

babelrc=.babelrc
nodemonconf=nodemon.json

cleanup()
{
  [ -z $BLDDIR ] && rm -rf $blddir || rm -rf $clientjs $serverjs $pubdir
}

init()
{
  [ -d $blddir ] || mkdir -p $blddir
  cp -LR $srcdir/static $pubdir
  [ -d $pubdir/scripts ] || mkdir -p $pubdir/scripts 
  ln -sf $clientjs $pubdir/scripts/client.js
}

build_client()
{
  BABEL_ENV=client-dev $browserify -t babelify $srcdir/client/app.js -o $clientjs
}

watch_client()
{
  BABEL_ENV=client-dev $watchify -t babelify $srcdir/client/app.js -o $clientjs -v
}

nodemon_server()
{
cat <<EOF >$nodemonconf
{
  "verbose": true,
  "ignore": ["build/*"]
}
EOF
}

nodemon_cleanup()
{
  rm -f $nodemonconf
}

build_server()
{
  BABEL_ENV=server-dev $browserify --node -t ejsify -t babelify $srcdir/server/app.js -o $serverjs
}

watch_server()
{
  nodemon_server
  BABEL_ENV=server-dev $nodemon $srcdir/server/app.js --exec babel-node
  nodemon_cleanup
}

run_dev()
{
  DB_LOCATION=server/db_samples node $serverjs
}

# call arguments verbatim:
$@
