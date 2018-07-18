/*
 * postcss.config.js
 * Copyright (C) 2018 linzi <linzi@linzi.lan>
 *
 * Distributed under terms of the MIT license.
 */
module.exports = {

    plugins:[

        require('autoprefixer')({ browsers: ["last 5 versions"]})

    ]

}
