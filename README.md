# gulp-less-base-import

add global dependencies to less file for gulp, this loader would resolve absolute global file path to relative path.

## Installation

```
$ npm install gulp-less-base-import --save-dev
```

## How to use

```javascript
var lessBaseImport = require('gulp-less-base-import');

gulp.src('./src/test/a.less')
    .pipe(lessBaseImport('./base'))
    .pipe(gulp.dest('./dist'));
```

Before:

```less
a {
    color: white;
}
```

After:

```less
@import "../../base";
a {
    color: white
}
```
