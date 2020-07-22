# pcs-front-end
Performance Community Site Front-end 저장소입니다.

## table of contents
1. scss 적용


## scss
1. `scss`를 적용하기 위해 아래 명령어를 통해 모듈을 설치
1. 모듈을 설치하고, style태그의 attribute로 `lang="scss"`를 추가

```bash
npm i --save-dev node-sass sass-loader
```

```html
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  p {
    color: red;
  }
}
</style>
```




- [참조: Vue CLI 4에서 SCSS 적용](https://m.blog.naver.com/mgveg/221900939600)



## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
