<template>
  <div class="container">
    <!--    <container :options="{width: 3840, height: 2160}">-->
    <div style="width: 100%;height: 100%">
      <div class="header">
        11111
      </div>
      <div class="separator-wrapper">
        22222
      </div>
      <div class="center">
        <div class="left">
          <div class="left1">
            33333
          </div>
          <div class="left2">
            44444
          </div>
          <div class="left3">
            55555
          </div>
          <div class="left4">
            6666
          </div>
          <div class="left5">
            7777
          </div>
          <div class="left6">
            8888
          </div>
        </div>
        <div class="right">
          <div class="right-top1">
            9999
          </div>
          <div class="right-top2">
            121212
          </div>
          <div class="right-bottom">
            <div class="right-left">
              <div class="right-left1">
                3232323
              </div>
              <div class="right-left2">
                3443434
              </div>
              <div class="right-left3">
                345435
              </div>
              <div class="right-left4">
                5345345
              </div>
            </div>
            <div class="right-right">
              <div class="right-right1">
                345345
              </div>
              <div class="right-right2">
                5345345
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Screen',
  components: {

  },
}
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;
  // background-color: rgb(50, 47, 48);
  background: rgb(29, 29, 29);
  color: #fff;
  font-size: 48px;

  #imooc-screen-container {
    display: flex;
    flex-direction: column;

    .header {
      height: 167px;
      margin-top: 10px;
    }

    .separator-wrapper {
      height: 10px;
    }

    .center {
      flex: 1;
      display: flex;

      .left {
        flex: 0 0 860px;
        display: flex;
        flex-direction: column;
        width: 860px;
        height: 100%;
        margin: 0 10px;
        box-sizing: border-box;
        background: rgb(60, 61, 64);

        .left1, .left2, .left3, .left4, .left5, .left6 {
          padding-bottom: 20px;
        }

        .left1 {
          height: 300px;
        }

        .left2 {
          height: 320px;
        }

        .left3 {
          height: 280px;
        }

        .left4 {
          height: 230px;
        }

        .left5 {
          height: 360px;
        }

        .left6 {
          height: 360px;
        }
      }

      .right {
        flex: 1;
        display: flex;
        flex-direction: column;
        height: 100%;
        margin: 0 10px;
        max-width: 2960px;
        overflow: hidden;

        .right-top1 {
          height: 206px;
          margin-bottom: 20px;
        }

        .right-top2 {
          height: 48px;
          margin-bottom: 20px;
        }

        .right-bottom {
          flex: 1;
          display: flex;

          .right-left {
            display: flex;
            flex-direction: column;
            width: 1917px;

            .right-left1 {
              height: 999px;
            }

            .right-left2 {
              height: 80px;
              padding-top: 20px;
              box-sizing: border-box;
            }

            .right-left3 {
              height: 350px;
              margin-top: 10px;

              .dv-border-box-8 {
                width: 100%;
                height: 100%;
                padding: 5px;
                box-sizing: border-box;
                background: rgb(66, 68, 70);
                border-radius: 10px;
                box-shadow: 10px 10px 10px rgba(0, 0, 0, .3);
              }
            }

            .right-left4 {
              height: 220px;
              margin-top: 10px;
            }
          }

          .right-right {
            flex: 1;
            display: flex;
            flex-direction: column;
            margin-left: 10px;

            .right-right1 {
              width: 100%;
              height: 999px;
              padding-right: 10px;
              box-sizing: border-box;
            }

            .right-right2 {
              width: 100%;
              height: 650px;
              margin-top: 20px;
            }
          }
        }
      }
    }
  }
}
</style>
