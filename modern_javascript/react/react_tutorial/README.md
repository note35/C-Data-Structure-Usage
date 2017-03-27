### 1-basic

1. 一個React.Component一定只能回傳一個tag

```javascript
// 這樣是非法的寫法
class Layout extends React.Component {
  render() {
    return (
      <h1>It works!</h1>
      <h1>It works!</h1>
    );
  }
}
// 得改寫成這樣
class Layout extends React.Component {
  render() {
    return (
      <div>
        <h1>It works!</h1>
        <h1>It works!</h1>
      </div>
    );
  }
}
```

2. 樣板引擎

```javascript
// 使用{}來接js物件
class Layout extends React.Component {
  render() {
    const stats = "works";
    return (
      <div>
        <h1>It {stats}!</h1>
        <h1>It {2+3}!</h1>
        <h1>It {function(){ return 2+3; }()}!</h1>
      </div>
    );
  }
}

// 乾淨一點的寫法
class Layout extends React.Component {
  getStats() {
    return "works";
  }
  render() {
    return (
      <h1>It {this.getStats()}!</h1>
    );
  }
}

// 建構子
class Layout extends React.Component {
  constructor() {
    super(); // 必須要super
    this.stats = "works";
  }
  render() {
    return (
      <h1>It {this.stats}!</h1>
    );
  }
}
```

### 2-composing-multiple

1. 樣板引擎陣列運用

```javascript
//下面兩種寫法效果相同
render() {
  var list = [<Header />,<Footer />];
  return (
    <div>
      {list}
    </div>
  );
}

render() {
  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
}
```

### 3-state-props

1. this.state 預設值為 null

```javascript
export default class Layout extends React.Component {
  render() {
    //this.state === null
    return (
      <div></div>
    );
  }
}
```

2. state必須要在建構子設定

```javascript
export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {stats: "works"};
  }
  render() {
    return (
      <div>{this.stats.stats}</div>
    );
  }
}
```

3. state特性

```javascript
// 只要state內的值變動，使用到該值的dom也會跟著變動
// 只有使用該值的dom會變動，其他dom都不會變動

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {stats: "works"};
  }
  render() {
    setTimeout(() => {
        this.setState({stats: "not work"});
    }, 1000);
    return (
      <div>{this.stats.stats}</div>
    );
  }
}
// Chrome -> F12 console -> 下方拉開選單 -> Rendering -> Painting Flashing
```

4. props特性

```javascript
// 從最外層component開始往內傳遞變數時使用props
// 舉例來說

// <Layout /> 裡面定義 title
title = "Title";
// 並傳入 <Header /> 中
<Header title={title} />

// <Header /> 裡面可以透過 this.props 取得
console.log(this.props); //{title: "Title"}
// 並傳入 <Title /> 中
<Title title={this.props.title}>

// <Title /> 裡面可以透過 this.props 取得Title並顯示
{this.props.title}

// 可以把props塞進去stats
// 如此一來內層的components就可以用到外層給的props，並且只更改細部的dom
```

### 4-events

1. 所有的變數函式放在layout，透過.bind(this)傳進去components

```javascript
changeTitle(title) {
  this.setState({title}); //{title: title}
}

render() {
  return (
    <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title}/>
  )
}
//如此一來，裡面的components也能夠使用changeTitle方法
//內部的component透過props、state操作外層Layout宣告之變數，函式等
```
