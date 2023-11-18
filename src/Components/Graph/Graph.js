import React from "react";
import styles from "./Graph.module.css";
import img1 from "../../Assets/rectangle@2x.png";
import img2 from "../../Assets/chart.svg";
import img3 from "../../Assets/vector-1173.svg";
import img4 from "../../Assets/vector-1174.svg";
import img5 from "../../Assets/group-626505.svg";
import img6 from "../../Assets/vector5.svg";
import img7 from "../../Assets/group-6265051.svg";
import img8 from "../../Assets/vector6.svg";
import img9 from "../../Assets/group-6265052.svg";
import img10 from "../../Assets/vector5.svg";
import img11 from "../../Assets/texture1@2x.png";
import img12 from "../../Assets/vector-11.svg";
import v1 from "../../Assets/vector-1176.svg";
import v2 from "../../Assets/group-1000003828.svg";
import v3 from "../../Assets/group-10000038281.svg";
import v4 from "../../Assets/group-1000003829.svg";
import v5 from "../../Assets/vector-1178.svg";
import v6 from "../../Assets/vector-1177.svg";
import v7 from "../../Assets/texture2@2x.png";

function Graph() {
  return (
    <div className={styles.container}>
      <div className={styles.frameParent4}>
        <h1 className={styles.tradeHeader}>
          Explore the Markets <br />
          like it is your <span className={styles.future}>Playground.</span>
        </h1>
        <p className={styles.tradeInfo}>
          Search for your favorite coins and stay ahead of the market
        </p>
        <div className={styles.rectangleParent}>
          <img className={styles.rectangleIcon} alt="" src={img1} />
          <img className={styles.chartIcon} alt="" src={img2} />
          <img className={styles.groupChild11} alt="" src={img3} />
          <img className={styles.groupChild12} alt="" src={img4} />
          <div className={styles.frameParent5}>
            <div className={styles.frameParent6}>
              <div className={styles.frameParent7}>
                <div className={styles.groupParent3}>
                  <img className={styles.frameChild1} alt="" src={img5} />
                  <div className={styles.bitcoinParent}>
                    <div className={styles.bitcoin}>Bitcoin</div>
                    <div className={styles.btcusdt}>BTC/USDT</div>
                  </div>
                </div>
                <img className={styles.vectorIcon5} alt="" src={img6} />
              </div>
              <div className={styles.frameParent8}>
                <div className={styles.priceParent}>
                  <div className={styles.price}>Price</div>
                  <a
                    className={styles.a}
                    href="https://coinmarketcap.com/currencies/bitcoin/#markets"
                    target="_blank"
                    rel="noreferrer"
                  >
                    $25,776.80
                  </a>
                </div>
                <div className={styles.frameParent9}>
                  <div className={styles.volParent}>
                    <div className={styles.price}>VOL</div>
                    <div className={styles.m}>$8.5B</div>
                  </div>
                  <div className={styles.volParent}>
                    <div className={styles.price}>CHG</div>
                    <div className={styles.div}>23.1%</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameParent6}>
              <div className={styles.frameParent7}>
                <div className={styles.groupParent3}>
                  <img className={styles.frameChild1} alt="" src={img7} />
                  <div className={styles.bitcoinParent}>
                    <div className={styles.bitcoin}>Solana</div>
                    <div className={styles.btcusdt}>SOL/USDT</div>
                  </div>
                </div>
                <img className={styles.vectorIcon6} alt="" src={img8} />
              </div>
              <div className={styles.frameParent8}>
                <div className={styles.priceParent}>
                  <div className={styles.price}>Price</div>
                  <div className={styles.div1}>$18.07</div>
                </div>
                <div className={styles.frameParent9}>
                  <div className={styles.volParent}>
                    <div className={styles.price}>VOL</div>
                    <div className={styles.m}>$372.8M</div>
                  </div>
                  <div className={styles.volParent}>
                    <div className={styles.price}>CHG</div>
                    <div className={styles.div}>02.1%</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameParent6}>
              <div className={styles.frameParent7}>
                <div className={styles.groupParent3}>
                  <img className={styles.frameChild1} alt="" src={img9} />
                  <div className={styles.bitcoinParent}>
                    <div className={styles.bitcoin}>Ethereum</div>
                    <div className={styles.btcusdt}>ETH/USDT</div>
                  </div>
                </div>
                <img className={styles.vectorIcon5} alt="" src={img10} />
              </div>
              <div className={styles.frameParent8}>
                <div className={styles.priceParent}>
                  <div className={styles.price}>Price</div>
                  <a
                    className={styles.a}
                    href="https://coinmarketcap.com/currencies/ethereum/#markets"
                    target="_blank"
                    rel="noreferrer"
                  >
                    $1,607.11
                  </a>
                </div>
                <div className={styles.frameParent9}>
                  <div className={styles.volParent}>
                    <div className={styles.price}>VOL</div>
                    <div className={styles.m}>$4.6B</div>
                  </div>
                  <div className={styles.volParent}>
                    <div className={styles.price}>CHG</div>
                    <div className={styles.div}>12.1%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img className={styles.textureIcon1} alt="" src={img11} />
        </div>
        <div className={styles.exploreMarketsWrapper}>
          <a href="Explore">
            <button className={styles.tradeButton}>Explore Markets</button>
          </a>
        </div>
      </div>
      <div className={styles.frameParent18}>
        <h1 className={styles.tradeHeader}>
          <span className={styles.future}>Unlock </span>New Frontiers.
        </h1>
        <p className={styles.tradeInfo}>
          Are you a stock trader looking for new opportunities to make money? We
          got you covered!
        </p>
        <div className={styles.tableWrapper}>
          <div className={styles.table}>
            <div className={styles.box}>
              <div className={styles.content}>
                <h1 className={styles.text1}>
                  Same <br /> Strategies
                </h1>
              </div>
            </div>
            <img src={img12} alt="vector" />
            {/* Repeat similar structures for the other boxes */}
            {/* Box 2 */}
            <div className={styles.box}>
              <div className={styles.content}>
                <h1 className={styles.text1}>
                  Same <br />
                  Indicators
                </h1>
              </div>
            </div>
            <img src={img12} alt="vector" />
            {/* Box 3 */}
            <div className={styles.box}>
              <div className={styles.content}>
                <h1 className={styles.text1}>
                  Better <br />
                  Leverage
                </h1>
              </div>
            </div>
            <img src={img12} alt="vector" />
            {/* Box 4 */}
            <div className={styles.box}>
              <div className={styles.content}>
                <h1 className={styles.text1}>
                  24x7 <br />
                  Trading
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent20}>
          <div className={styles.frameParent21}>
            <div className={styles.groupParent6}>
              <div className={styles.vectorContainer}>
                <img className={styles.groupChild13} alt="" src={v1} />
                <div className={styles.groupParent7}>
                  <img className={styles.frameChild7} alt="" src={v2} />
                  <div className={styles.red}>Sell</div>
                </div>
                <div className={styles.groupParent8}>
                  <img className={styles.frameChild7} alt="" src={v2} />
                  <div className={styles.red}>Sell</div>
                </div>
                <div className={styles.groupParent9}>
                  <img className={styles.frameChild9} alt="" src={v3} />
                  <div className={styles.red}>Sell</div>
                </div>
                <div className={styles.groupParent10}>
                  <img className={styles.frameChild7} alt="" src={v4} />
                  <div className={styles.green}>Buy</div>
                </div>
                <div className={styles.groupParent11}>
                  <img className={styles.frameChild7} alt="" src={v4} />
                  <div className={styles.green}>Buy</div>
                </div>
              </div>
              <div className={styles.btcusdt1}>BTCUSDT</div>
            </div>
            <img className={styles.frameChild12} alt="" src={v5} />
            <div className={styles.groupParent12}>
              <div className={styles.vectorParent1}>
                <img className={styles.groupChild14} alt="" src={v6} />
                <div className={styles.groupParent13}>
                  <img className={styles.frameChild7} alt="" src={v4} />
                  <div className={styles.green}>Buy</div>
                </div>
                <div className={styles.groupParent14}>
                  <img className={styles.frameChild14} alt="" src={v3} />
                  <div className={styles.red}>Sell</div>
                </div>
                <div className={styles.groupParent15}>
                  <img className={styles.frameChild7} alt="" src={v2} />
                  <div className={styles.red}>Sell</div>
                </div>
                <div className={styles.groupParent16}>
                  <img className={styles.frameChild14} alt="" src={v4} />
                  <div className={styles.green}>Buy</div>
                </div>
                <div className={styles.groupParent17}>
                  <img className={styles.frameChild7} alt="" src={v4} />
                  <div className={styles.green}>Buy</div>
                </div>
              </div>
              <div className={styles.nifty}>nifty</div>
            </div>
          </div>
          <img className={styles.textureIcon2} alt="" src={v7} />
        </div>
      </div>
    </div>
  );
}

export default Graph;
