import { createStore } from 'redux'
import produce from 'immer'
// import xrpIcon from './‏‏xpr_icon.PNG'


const initialState = {
    coins: [
        {
            name: "XRP",
            icon: "xrpIcon",
            Indices: [
                {
                    nameC: "XPRAUD",
                    number: "1.55",
                    Percent: -0.57,
                    number2: "121.8k",
                    star: false
                },
                {
                    nameC: "XPRBTC",
                    number: "0.00002354",
                    Percent: 0.43,
                    number2: "824.6K",
                    star: false
                },
                {
                    nameC: "XRPCAD",
                    number: "1.43",
                    Percent: -0.35,
                    number2: "222.3K",
                    star: false
                },
                {
                    nameC: "XRPETH",
                    number: "0.0003566",
                    Percent: 0.39,
                    number2: "230.8K",
                    star: false
                },
                {
                    nameC: "XRPEUR",
                    number: "0.9560",
                    Percent: -0.35,
                    number2: "6.450M",
                    star: true
                },
                {
                    nameC: "XRPGBP",
                    number: "0.8176",
                    Percent: -0.65,
                    number2: "976.1K",
                    star: false
                },
                {
                    nameC: "XRPJPY",
                    number: "124.02",
                    Percent: -0.76,
                    number2: "26.32K",
                    star: false
                },
                {
                    nameC: "XRPUSD",
                    number: "1.13",
                    Percent: -0.36,
                    number2: "4.333M",
                    star: false
                },
                {
                    nameC: "XRPUSDT",
                    number: "1.13",
                    Percent: -0.35,
                    number2: "825.7K",
                    star: false
                }
            ]
        }
        ,
        {
            name: "BCH",
            icon: "",
            Indices: [
                {
                    nameC: "BCDAUD",
                    number: "929.99",
                    Percent: -0.05,
                    number2: "7.58",
                    star: false
                },
                {
                    nameC: "BCDBTC",
                    number: "0.01347",
                    Percent: -3.37,
                    number2: "7.58",
                    star: false
                },
                {
                    nameC: "BCHETH",
                    number: "0.2040",
                    Percent: -3.32,
                    number2: "64.78",
                    star: false
                },
                {
                    nameC: "BCHEUR",
                    number: "548.56",
                    Percent: -4.06,
                    number2: "1.227K",
                    star: false
                },
                {
                    nameC: "BCHGBP",
                    number: "466.70",
                    Percent: -4.82,
                    number2: "9.65",
                    star: false
                },
                {
                    nameC: "BCHJPY",
                    number: "70759.00",
                    Percent: -5.00,
                    number2: "20.61",
                    star: false
                },
                {
                    nameC: "BCHUSD",
                    number: "646.66",
                    Percent: -4.00,
                    number2: "2.216K",
                    star: false
                },
                {
                    nameC: "BCHUSDT",
                    number: "645.70",
                    Percent: -4.33,
                    number2: "150.12",
                    star: false
                },
                {
                    nameC: "BCHGBP",
                    number: "466.70",
                    Percent: -4.82,
                    number2: "9.65",
                    star: false
                }
            
            ]
        },
        {
            name: "LTC",
            icon: "",
            Indices: [
                {
                    nameC: "LTCAUD",
                    number: "236.88",
                    Percent: -3.63,
                    number2: "61.66",
                    star: false
                },
                {
                    nameC: "LTCBTC",
                    number: "sdf",
                    Percent: 434343,
                    number2: "r34",
                    star: false
                },
                {
                    nameC: "LTCETH",
                    number: "0.05441",
                    Percent: -2.42,
                    number2: "590.38",
                    star: false
                },
                {
                    nameC: "LTCEUR",
                    number: "145.99",
                    Percent: -3.00,
                    number2: "9.36K",
                    star: false
                },
                {
                    nameC: "LTCAUD",
                    number: "236.88",
                    Percent: 0.63,
                    number2: "61.66",
                    star: false
                }
            ]
        }
    ]
}
const reducer = produce((state, action) => {
    switch (action.type) {

    }

}, initialState)

const store = createStore(reducer);
window.store = store;
export default store;