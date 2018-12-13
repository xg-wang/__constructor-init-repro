# --constructor-init-repro

```
npm i
ember s
```

open devtool, this warning should show up:

```
DEPRECATION: using `new` with EmberObject has been deprecated. Please use `create` instead, or consider using native classes without extending from EmberObject. [deprecation id: object.new-constructor] See https://emberjs.com/deprecations/v3.x#toc_object-new-constructor for more details.
```