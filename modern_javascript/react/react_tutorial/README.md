###1-basic

1.一個React.Component一定只能回傳一個tag

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

2.樣板引擎

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

###2-composing-multiple

1.樣板引擎陣列運用

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
