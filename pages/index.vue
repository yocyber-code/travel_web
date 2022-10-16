<template>
  <div>
    <b-carousel
      class="carousel"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        img-src="https://www.wheredowego.in.th/wp-content/uploads/2019/02/cvr_05.jpg"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide
        caption="ดื่มด่ำธรรมชาติ"
        text="นครนายกมีสถานที่ท่องเที่ยวธรรมชาติมากมายรอให้คุณมาสัมผัส"
        img-src="https://www.wheredowego.in.th/wp-content/uploads/2019/02/8-4-2000x1333.jpg"
      ></b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide
        caption="ที่พักมากมาย"
        text="มีที่พักมากกว่าพันแห่งให้คุณได้พักผ่อน"
        img-src="https://www.wheredowego.in.th/wp-content/uploads/2019/02/17-4-2000x1333.jpg"
      ></b-carousel-slide>
      <b-carousel-slide
        caption="จองที่พัก"
        text="จองที่พักกับเราได้สะดวกสบาย"
        img-src="https://www.wheredowego.in.th/wp-content/uploads/2019/02/25-5-2000x1333.jpg"
      ></b-carousel-slide>
    </b-carousel>

    <div class="location-container">
      <div class="location-title" :class="theme">
        <h1>สถานที่ท่องเที่ยวน่าสนใจ</h1>
      </div>
      <b-card-group class="location-content">
        <b-card
          img-src="https://thiphaknakhonnayok.sgp1.cdn.digitaloceanspaces.com/article/%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%95%E0%B8%81%E0%B8%8A%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%A5%E0%B8%A1-%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%95%E0%B8%81-7-%E0%B8%8A%E0%B8%B1%E0%B9%89%E0%B8%99-%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B9%80%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%A7%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%99%E0%B8%B2%E0%B8%A2%E0%B8%81-%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B9%80%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%A7%E0%B9%83%E0%B8%81%E0%B8%A5%E0%B9%89%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E-%E0%B9%83%E0%B8%84%E0%B8%A3%E0%B8%A3%E0%B8%B1%E0%B8%81%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%95%E0%B8%81%E0%B8%AB%E0%B9%89%E0%B8%B2%E0%B8%A1%E0%B8%9E%E0%B8%A5%E0%B8%B2%E0%B8%94/cover/%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%95%E0%B8%81%E0%B8%8A%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%A5%E0%B8%A1-%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%9E%E0%B8%B1%E0%B8%81%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%99%E0%B8%B2%E0%B8%A2%E0%B8%81%E0%B8%A5%E0%B8%B2%E0%B8%A2%E0%B8%99%E0%B9%89%E0%B8%B3.webp"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2 location-card"
        >
          <h3 class="card-title" :class="theme">น้ำตกช่องลม</h3>
          <b-card-text class="card-description" :class="theme">
            น้ำตกช่องลม น้ำตก 7 ชั้นสุดสวยที่ซ่อนตัวอยู่ในเขื่อนขุนด่านปราการชล
            น้ำตกที่มีทุ่งหญ้าสีเขียวขจี
            นับได้ว่าเป็นความธรรมชาติที่หาได้ใกล้กรุงเทพฯ
          </b-card-text>

          <b-button href="#" class="location-btn" :class="theme">
            น่าสนใจ
          </b-button>
        </b-card>

        <b-card
          img-src="https://inzpy.com/wp-content/uploads/2022/06/%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B9%80%E0%B8%99%E0%B8%B7%E0%B9%89%E0%B8%AD%E0%B8%AB%E0%B8%B2-copy-3-15.jpg"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2 location-card"
        >
          <h3 class="card-title" :class="theme">เขื่อนขุนด่านปราการชล</h3>
          <b-card-text class="card-description" :class="theme">
            เขื่อนคอนกรีตอัดบดที่มีความยาว 2,720 เมตร ความสูง 93 เมตร
            ความจุน้ำมากถึง 224 ล้านลูกบาศก์เมตร
            เขื่อนแห่งนี้ถือเป็นเขื่อนคอนกรีตอัดบดที่มีความยาวที่สุดในโลกเลย
          </b-card-text>

          <b-button href="#" class="location-btn" :class="theme">
            น่าสนใจ
          </b-button>
        </b-card>

        <b-card
          img-src="https://www.wheredowego.in.th/wp-content/uploads/2019/02/17-4-2000x1333.jpg"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2 location-card"
        >
          <h3 class="card-title" :class="theme">สะพานทุ่งนามุ้ย</h3>
          <b-card-text class="card-description" :class="theme">
            ที่นี่คือทุ่งนาเกษตรกรตัวอย่างที่ทำไว้ดีมากๆ
            เป็นทุ่งนาสีเขียวที่ปลูกเต็มพื้นที่มีสะพานไม้ไผ่เล็กๆ
            ให้เดินเข้าไปถ่ายรูปเล่นด้านในที่มีคาเฟ่อยู่ได้ด้วย
            ส่วนปากทางเข้าก็จะเป็นลุงๆ ป้าๆ ขายอาหารพื้นบ้าน และคาเฟ่เล็กๆ
            ให้นั่งชิลดูพระอาทิตย์ตกดินกัน
          </b-card-text>

          <b-button href="#" class="location-btn" :class="theme">
            น่าสนใจ
          </b-button>
        </b-card>

        <b-card
          img-src="https://inzpy.com/wp-content/uploads/2022/06/3-%CE%B1%E2%95%95o%CE%B1%E2%95%95%E2%96%92%CE%B1%E2%95%95c%CE%B1%E2%95%95o%CE%B1%E2%95%95%E2%96%91%CE%B1%E2%95%A3a%CE%B1%E2%95%95a%CE%B1%E2%95%95u%CE%B1%E2%95%A3e.jpg"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2 location-card"
        >
          <h3 class="card-title" :class="theme">น้ำตกวังตะไคร้</h3>
          <b-card-text class="card-description" :class="theme">
            น้ำตกวังตะไคร้ หรือ อุทยานวังตะไคร้
            แวดล้อมไปด้วยต้นไม้ใหญ่และพรรณไม้นานาชนิด รวมถึงสวนไม้ดอกไม้ประดับ
            อีกทั้งยังโอบล้อมด้วยภูเขา มีธารน้ำ 2 สาย
            ซึ่งมีต้นน้ำมาจากน้ำตกแม่ปล้อง และน้ำตกเหวกฐินไหลมารวมกัน
          </b-card-text>

          <b-button href="#" class="location-btn" :class="theme">
            น่าสนใจ
          </b-button>
        </b-card>
      </b-card-group>
      <b-card-group class="location-content">
        <b-card
          img-src="https://thiphaknakhonnayok.sgp1.cdn.digitaloceanspaces.com/article/%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%95%E0%B8%81%E0%B8%8A%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%A5%E0%B8%A1-%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%95%E0%B8%81-7-%E0%B8%8A%E0%B8%B1%E0%B9%89%E0%B8%99-%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B9%80%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%A7%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%99%E0%B8%B2%E0%B8%A2%E0%B8%81-%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B9%80%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%A7%E0%B9%83%E0%B8%81%E0%B8%A5%E0%B9%89%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E-%E0%B9%83%E0%B8%84%E0%B8%A3%E0%B8%A3%E0%B8%B1%E0%B8%81%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%95%E0%B8%81%E0%B8%AB%E0%B9%89%E0%B8%B2%E0%B8%A1%E0%B8%9E%E0%B8%A5%E0%B8%B2%E0%B8%94/cover/%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%95%E0%B8%81%E0%B8%8A%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%A5%E0%B8%A1-%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%9E%E0%B8%B1%E0%B8%81%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%99%E0%B8%B2%E0%B8%A2%E0%B8%81%E0%B8%A5%E0%B8%B2%E0%B8%A2%E0%B8%99%E0%B9%89%E0%B8%B3.webp"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2 location-card"
        >
          <h3 class="card-title" :class="theme">น้ำตกช่องลม</h3>
          <b-card-text class="card-description" :class="theme">
            น้ำตกช่องลม น้ำตก 7 ชั้นสุดสวยที่ซ่อนตัวอยู่ในเขื่อนขุนด่านปราการชล
            น้ำตกที่มีทุ่งหญ้าสีเขียวขจี
            นับได้ว่าเป็นความธรรมชาติที่หาได้ใกล้กรุงเทพฯ
          </b-card-text>

          <b-button href="#" class="location-btn" :class="theme">
            น่าสนใจ
          </b-button>
        </b-card>

        <b-card
          img-src="https://inzpy.com/wp-content/uploads/2022/06/%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B9%80%E0%B8%99%E0%B8%B7%E0%B9%89%E0%B8%AD%E0%B8%AB%E0%B8%B2-copy-3-15.jpg"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2 location-card"
        >
          <h3 class="card-title" :class="theme">เขื่อนขุนด่านปราการชล</h3>
          <b-card-text class="card-description" :class="theme">
            เขื่อนคอนกรีตอัดบดที่มีความยาว 2,720 เมตร ความสูง 93 เมตร
            ความจุน้ำมากถึง 224 ล้านลูกบาศก์เมตร
            เขื่อนแห่งนี้ถือเป็นเขื่อนคอนกรีตอัดบดที่มีความยาวที่สุดในโลกเลย
          </b-card-text>

          <b-button href="#" class="location-btn" :class="theme">
            น่าสนใจ
          </b-button>
        </b-card>

        <b-card
          img-src="https://www.wheredowego.in.th/wp-content/uploads/2019/02/17-4-2000x1333.jpg"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2 location-card"
        >
          <h3 class="card-title" :class="theme">สะพานทุ่งนามุ้ย</h3>
          <b-card-text class="card-description" :class="theme">
            ที่นี่คือทุ่งนาเกษตรกรตัวอย่างที่ทำไว้ดีมากๆ
            เป็นทุ่งนาสีเขียวที่ปลูกเต็มพื้นที่มีสะพานไม้ไผ่เล็กๆ
            ให้เดินเข้าไปถ่ายรูปเล่นด้านในที่มีคาเฟ่อยู่ได้ด้วย
            ส่วนปากทางเข้าก็จะเป็นลุงๆ ป้าๆ ขายอาหารพื้นบ้าน และคาเฟ่เล็กๆ
            ให้นั่งชิลดูพระอาทิตย์ตกดินกัน
          </b-card-text>

          <b-button href="#" class="location-btn" :class="theme">
            น่าสนใจ
          </b-button>
        </b-card>

        <b-card
          img-src="https://inzpy.com/wp-content/uploads/2022/06/3-%CE%B1%E2%95%95o%CE%B1%E2%95%95%E2%96%92%CE%B1%E2%95%95c%CE%B1%E2%95%95o%CE%B1%E2%95%95%E2%96%91%CE%B1%E2%95%A3a%CE%B1%E2%95%95a%CE%B1%E2%95%95u%CE%B1%E2%95%A3e.jpg"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2 location-card"
        >
          <h3 class="card-title" :class="theme">น้ำตกวังตะไคร้</h3>
          <b-card-text class="card-description" :class="theme">
            น้ำตกวังตะไคร้ หรือ อุทยานวังตะไคร้
            แวดล้อมไปด้วยต้นไม้ใหญ่และพรรณไม้นานาชนิด รวมถึงสวนไม้ดอกไม้ประดับ
            อีกทั้งยังโอบล้อมด้วยภูเขา มีธารน้ำ 2 สาย
            ซึ่งมีต้นน้ำมาจากน้ำตกแม่ปล้อง และน้ำตกเหวกฐินไหลมารวมกัน
          </b-card-text>

          <b-button href="#" class="location-btn" :class="theme">
            น่าสนใจ
          </b-button>
        </b-card>
      </b-card-group>
    </div>

    <div class="content">
      <h1 class="content-title" :class="theme">นครนายก</h1>
      <p class="content-description" :class="theme">
        ร้อนจังเลย แต่จะเดินเที่ยวห้างก็เบื่อ
        เมื่อประเทศใกล้เส้นศูนย์สูตรอย่างเราก็มักจะอากาศร้อนสุด
        อาบน้ำรอบเช้ายังเช็ดตัวไม่เสร็จดีก็เริ่มร้อนอีกแล้ว
        และไม่รู้จะเรียกว่าโชคดีหรือโชคร้าย บางวันดันมีฝนตกจั้ก ๆ
        ไม่ลืมหูลืมตาทั้งวันทั้งคืน เหมือนจะเย็นใจดีแหละนะ
        ถ้าไม่ติดว่าตอนเช้าหลังคืนฝนตกก็กลับมาร้อนเหมือนกัน แถมรถก็มักจะติด
        วันทำงานในช่วงซัมเมอร์ก็มีแต่เรื่องร้อน ๆ เย็น ๆ ชวนให้หงุดหงิดใจ
        อารมณ์เสียกันเป็นประจำ เลยอยากชวนเพื่อน ๆ หาเวลาว่างไปเที่ยวนครนายก
        สัมผัสธรรมชาติให้เย็นฉ่ำชื่นอุรา มองไปทางไหนก็อารมณ์ดี
      </p>
      <p class="content-description" :class="theme">
        อีกหนึ่งจังหวัดที่ใช้เวลาเดินทางไม่นานจากกรุงเทพฯประมาณ 2 ชั่วโมง
        ก็จะได้พบกับบรรยากาศอันร่มรื่นด้วยป่าเขาที่รายล้อม
        มีสถานที่ท่องเที่ยวหลากหลาย ทั้งภูเขา น้ำตก สถานที่ทางศาสนา
        เรียกว่าได้สามารถไปสูดอากาศบริสุทธิ์ได้แบบใกล้ๆโดยจะเลือกเดินทางแบบไปเช้าเย็นกลับ
        หรือค้างพักผ่อนก็ย่อมได้
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'Home',
  props: {
    theme: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      slide: 0,
      sliding: null,
    }
  },
  methods: {
    onSlideStart() {
      this.sliding = true
    },
    onSlideEnd() {
      this.sliding = false
    },
  },
}
</script>

<style lang="scss" scoped>
.location-container {
  width: 100%;

  .location-title {
    width: 100%;
    text-align: center;
    margin: 30px 0;

    &.lightblue {
      h1 {
        color: #6ccdf3;
      }
    }
    &.redblack {
      h1 {
        color: #950101;
      }
    }
    &.darkgold {
      h1 {
        color: #d89216;
      }
    }
  }

  .location-content {
    margin: 30px 40px;

    .location-card {
      display: inline-block;
      margin: 0 20px;
      border-radius: 20px;
      overflow: hidden;
      .card-title {
        &.lightblue {
          color: #6ccdf3;
        }
        &.redblack {
          color: #950101;
        }
        &.darkgold {
          color: #d89216;
        }
      }
      .card-description {
        margin-bottom: 50px;
        &.lightblue {
          color: #6ccdf3;
        }
        &.redblack {
          color: #950101;
        }
        &.darkgold {
          color: #d89216;
        }
      }
      .location-btn {
        position: absolute;
        bottom: 20px;
        border: none;
        &.lightblue {
          background-color: #6ccdf3;
        }
        &.redblack {
          background-color: #ff0000;
          color: #000;
        }
        &.darkgold {
          background-color: #000;
          color: #d89216;
        }
      }
    }
  }
}

.content {
  width: 80%;
  margin: 0 auto;
  .content-title {
    display: flex;
    justify-content: center;
    &.lightblue {
      color: #6ccdf3;
    }
    &.redblack {
      color: #950101;
    }
    &.darkgold {
      color: #d89216;
    }
  }
  .content-description {
    text-indent: 100px;
    font-size: 20px;
    &.lightblue {
      color: #6ccdf3;
    }
    &.redblack {
      color: #950101;
    }
    &.darkgold {
      color: #d89216;
    }
  }
}
</style>
