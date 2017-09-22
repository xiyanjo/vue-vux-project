<template>
    <ul>
        <li>
            <input type="text" :value ="enTotal">
        </li>
        <li v-for="item in list" @click="change(item.val)">
            <!--<p> {{item.cla}}</p>-->
            <input :class="item.cla" v-model=item.cla>
        </li>
    </ul>
</template>
<script>
    import {Group, Checklist, Cell, Divider, XButton} from 'vux'
    export default{
        data(){
            return {
                enIns:'',
                enFal:'',
                enVip:'',
                list: [{
                    val: '55555',
                    cla: 'enIns'
                }, {
                    val: '6666',
                    cla: 'enFal'
                }, {
                    val: '8888',
                    cla: 'enVip'
                }],
            }
        },
        components: {},
        computed:{
            enTotal:{
                get:function() {
                    console.log(6666);
                    return this.enIns+this.enFal+this.enVip;
                }
            }
        },
        methods: {
            change(aa){
                console.log(aa);
            },

        }
    }
</script>
<style>
    .fold-list .item-content {
        min-height: 2.2rem;
        position: relative;
    }

    .fold-list .s {
        display: block;
    }

    .fold-list .item-content:after {
        content: '';
        height: 1px;
        width: 100%;
        background-color: #e7e7e7;
        display: block;
    }

    .list-block .item-contentnob {
        display: block;
        text-align: center;
        height: 1.8rem;
        line-height: 1.8rem;
        color: #fff;
        padding: 0;
        min-height: 0;
        font-size: .8rem;
    }

    .fold-list .item-inner {
        padding: 0 .5rem;
        min-height: 2.2rem;
        line-height: 2.4rem;
        font-size: 16px;
        background: -webkit-linear-gradient(#fcfcfc, #dedede);
        /* Safari 5.1 - 6.0 */
        background: -o-linear-gradient(#fcfcfc, #dedede);
        /* Opera 11.1 - 12.0 */
        background: -moz-linear-gradient(#fcfcfc, #dedede);
        /* Firefox 3.6 - 15 */
        background: linear-gradient(#fcfcfc, #dedede);
        /* 标准的语法 */
    }

    .item-detail {
        opacity: 1;
    }

    .chBox {
        display: inline-block;
        /*font-size:0.6rem;*/
    }

    .chBoxAll {
        display: inline-block;
    }

    input[type="checkbox"] {
        display: none;
    }

    .fold-list .item-inner .list-title {
        padding-left: 0.4rem;
    }

    .item-title .icon-menu {
        color: #008a7c;
        font-size: 1.4rem;
    }

    .icon-sangeyuandian {
        font-size: 1.2rem;
        color: #4a4a4a;
        padding: 0 0 0 20px;
    }

    .menuPan {
        background: #fff;
        width: 50%;
        min-width: 160px;
        position: absolute;
        top: 1.6rem;
        right: 0.8rem;
        display: none;
        border-radius: 5px;
        z-index: 10000;
    }

    .menuPan ul {
        font-size: 0.6rem;
        margin: 0;
        padding: 0;
        line-height: 1.5rem;
        box-shadow: 1px 1px 3px rgba(0, 0, 0, .3);
    }

    .menuPan ul li {
        list-style: none;
        border-bottom: 1px solid #dadada;
        padding: 0 0.8rem;
        /*line-height: 2.4rem;*/
    }

    .menuPan ul li :hover {
        color: #008A7C;
    }

    .menuPan ul li a {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        color: #3a3e3d;
        line-height: 2.4rem;
        font-size: 18px;
    }

    .fold-list .item-inner .appr-pass-middle {
        vertical-align: middle;
        padding-left: 0.7rem;
        box-sizing: border-box;
    }

    .fold-list .item-inner .dai-appro-tip {
        /*color: orange;*/
        padding: 0;
    }

    .chBox .check {
        color: #4a4a4a;
        vertical-align: inherit;
    }

    .checkAll {
        color: #4a4a4a;
        vertical-align: inherit;
    }

    .appr-icon-mr10 {
        margin-right: 0.1rem;
        font-size: 18px;
    }

    .dai-tipTitle {
        font-size: 0.85rem;
        padding: 0;
        margin: 0;
        margin-bottom: 15px;;
    }

    .dai-appr-text {
        outline: none;
        resize: none;
        padding: 8px;
    }

    .mesgTip {
        /*color: #a94442;*/
        color: red;
        text-align: left;
        font-size: 18px;
    }

    .passBtn {
        color: #008a7c;
        border: 1px solid #008a7c;
    }

    .content-block.margin-ps {
        margin: 1rem 0;
    }

    .passBtn {
        box-sizing: border-box;
        color: #000;
        height: 2rem;
        line-height: 2rem;
        width: 100%;
        border-radius: 0;
        background: #F9F9F9;
        border: 0.5px solid #aaa;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }

    /*审核状态颜色*/
    /*待审核：黄色（#f19c00）*/
    .isApproval {
        color: #f19c00;
    }

    /*已通过：绿色（#008a7c）*/
    .approvalled {
        color: #008a7c;
    }

    /*已退回：红色（#FF6C60）*/
    .returned {
        color: #FF6C60;
    }

    /*未提交：浅灰色（#a1a1a1）*/
    .unCommited {
        color: #a1a1a1;
    }

    .statusText {
        display: inline-block;
    }

    .date-info .timeApr {
        font-size: 18px;
    }

    /*总收入*/
    .totalIncom {
        padding: 5px 0;
        font-size: 14px;
        margin: 0 15px 0 18px;
        color: #353535;
    }

    .incomeNum {
        display: inline-block;
        float: right;
    }

    /*auditing end*/
    table {

        border-collapse: collapse;
        border-spacing: 0;
    }

    * {
        box-sizing: border-box;
    }

    td, th {
        padding: 0;
    }

    /*laige*/
    .bk-white {
        background-color: #fff;
    }

    em,
    i {
        font-style: normal;
    }

    .content-block {
        position: relative;
        top: 0;
        left: 0;
        color: #4a4a4a;
    }

    .transform-overturn {
        -webkit-transform: rotate(180deg);
        -moz-transform: rotate(180deg);
        -ms-transform: rotate(180deg);
        transform: rotate(180deg);
    }

    .date-info {
        padding: .5rem 0 0.1rem;
        font-size: .8rem;
        border-bottom: 1px solid #e7e7e7;
        position: relative;
    }

    .date-info #datepicker {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 100;
        opacity: 0;
    }

    .date-info p {
        margin: 0;
    }

    .fold-wrap {
        margin: 0;
        font-size: .65rem;
    }

    .margin0 {
        margin: 0;
    }

    .padding0 {
        padding: 0;
    }

    .icon-down {
        color: #000;
        font-size: .5rem;
    }

    .fold-list {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .fold-list .item-content {
        min-height: 2.2rem;
        position: relative;
    }

    .fold-list .s {
        display: block;
    }

    .fold-list .item-content:after {
        content: '';
        height: 1px;
        width: 100%;
        background-color: #e7e7e7;
        display: block;
    }

    .list-block .item-contentnob {
        display: block;
        text-align: center;
        height: 1.8rem;
        line-height: 1.8rem;
        color: #fff;
        padding: 0;
        min-height: 0;
        font-size: .8rem;
    }

    .fold-list .item-inner {
        padding: 0 .5rem;
        min-height: 2.2rem;
        line-height: 2.4rem;
        font-size: 16px;
        background: -webkit-linear-gradient(#fcfcfc, #dedede);
        /* Safari 5.1 - 6.0 */
        background: -o-linear-gradient(#fcfcfc, #dedede);
        /* Opera 11.1 - 12.0 */
        background: -moz-linear-gradient(#fcfcfc, #dedede);
        /* Firefox 3.6 - 15 */
        background: linear-gradient(#fcfcfc, #dedede);
        /* 标准的语法 */
    }

    /*审批页面 全选菜单*/

    .fold-list-all {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .fold-list-all .item-inner {
        padding: 0 .5rem;
        min-height: 2.2rem;
        line-height: 2.4rem;
        font-size: 16px;
        background: -webkit-linear-gradient(#fcfcfc, #dedede);
        /* Safari 5.1 - 6.0 */
        background: -o-linear-gradient(#fcfcfc, #dedede);
        /* Opera 11.1 - 12.0 */
        background: -moz-linear-gradient(#fcfcfc, #dedede);
        /* Firefox 3.6 - 15 */
        background: linear-gradient(#fcfcfc, #dedede);
        /* 标准的语法 */
    }

    .fold-list-all .item-inner span {
        padding: 0 .2rem;
        font-weight: bold;
    }

    /*end*/

    .fold-list .item-inner span {
        padding: 0 .2rem;
        font-weight: bold;
    }

    .item-detail {
        padding: 0;
        -webkit-transition: all .1s;
        -moz-transition: all .1s;
        -ms-transition: all .1s;
        transition: all .1s;
        background-color: #fbfbfb;
        opacity: 0;
        overflow: hidden;
    }

    .show .item-detail {
        opacity: 1;
    }

    ul.item-detail li {
        box-sizing: content-box;
        list-style: none;
        height: 2rem;
        line-height: 2rem;
    }

    ul.item-detail li span {
        display: inline-block;
        width: 33.3%;
        text-align: center;
    }

    ul.item-detail li span em.lg-line-down {
        border-bottom: .5px solid #e7e7e7;
    }

    ul.item-detail li:last-child span em {
        box-shadow: none;
    }

    ul.item-detail span em i {
        margin: 0 .1rem;
    }

    ul.item-detail li.tb-first-tit {
        background-color: #25C6DA;
        color: #fff;
        line-height: 1.8rem;
        height: 1.8rem;
    }

    .color-black {
        color: #333;
    }

    .fixed-top-tit {
        position: fixed;
        top: 0;
        z-index: 10;
        box-shadow: 0px 4px 20px -3px #b3b3b3;
        width: 100%;
    }

    .fold-list .icon-menu {
        font-size: 1rem;
        padding: 0 .2rem;
        margin-top: -1px;
        color: #848484;
    }

    .date-info .lg-time {
        text-align: left;
        margin: 5px 0px 5px 14px;
        text-align: center;
        font-size: 16px;
    }

    .date-info .lg-time span {
        font-size: 18px;
        vertical-align: middle;
    }

    .lg-time .icon {
        margin-left: 6px;
    }

    .date-info .lg-timedes {
        text-align: right;
        font-size: 14px;
        margin-top: 6px;
        margin-right: 6px;
    }

    .footer-data {
        padding: .5rem .8rem 4rem .8rem;
        font-size: .7rem;
    }

    .total-line {
        height: 2.4rem;
        line-height: 2.4rem;
        padding: 0 .7rem;
        font-size: .65rem;
    }

    .item-inner-place {
        height: 2.4rem;
        display: none;
    }

    #overlay {
        background: #000;
        filter: alpha(opacity=50);
        /* IE的透明度 */
        opacity: 0.5;
        /* 透明度 */
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        z-index: 2000;
        /* 此处的图层要大于页面 */
        display: none;
    }

    .list-ti-content {
        display: inline-block;
        font-size: 14px;
        color: #666;
        font-weight: normal;
    }

    .fold-list .list-ti-content span {
        font-weight: normal;
    }

    .index-table {
        width: 100%;
        font-size: 14px;
        line-height: 1.5rem;
        text-align: center;
    }

    .index-table thead th {
        background-color: #008a7c;
        color: #fff;
        font-weight: normal;
        line-height: 1rem;
        border: 1px solid #ccc
    }

    .yellow-wrap .index-table thead th {
        background-color: #ffc200;
    }

    .index-table td {
        color: #008a7c;
        border: 1px solid #ccc
    }

    .yellow-wrap .index-table td {
        color: #D2A000;
    }

    .index-table tbody tr:nth-child(even) {
        background-color: #c3eae6;
    }

    .yellow-wrap .index-table tbody tr:nth-child(even) {
        background-color: #fff6d7;
    }

    .table-top {
        background-color: #008a7c;
        color: #fff;
        line-height: 1.5rem;
        padding-left: .4rem;
        font-size: 16px;
        border: 1px solid #ccc;
        border-width: 0 1px;
    }

    .yellow-wrap .table-top {
        background-color: #ffc200;
    }

    .table-top span {
        font-size: 14px;
    }

    .table-top-total {
        display: inline-block;
        font-size: 14px;
    }

    .table-top-total {
        padding-left: .8rem;
    }

    .table-top-total span {
        margin: 0 .6rem
    }

    .bold {
        font-weight: bold;
    }

    .width-first {
        width: 16%;
    }

    .font-15b {
        font-size: 15px;
        font-weight: bold !important;
    }

    .money-r {
        text-align: right;
        padding-right: 2px;
    }

    .split-td > div {
        height: 0.75rem;
        line-height: .75rem;
    }

    .split-td > div + div {
        border-top: 1px solid #ccc;
    }

    .index-nodata {
        height: 5rem;
        line-height: 5rem;
        text-align: center;
        color: #008a7c;
        font-size: 16px;
        border-bottom: 1px solid #e7e7e7;
    }

    /* 切换数据日期tab样式 */

    .switch-date {
        display: block;
        position: fixed;
        z-index: 9999;
        width: 100%;
        height: 100px;
        top: 40%;
        font-size: .7rem;
    }

    .switch-date.show {
        display: block;
    }

    .switch-date div {
        position: absolute;
        height: 100%;
        width: 60px;
        text-align: center;
        line-height: 100px;
        background: rgba(0, 0, 0, 0.45);
        color: #fff;
        -webkit-transition: all .1s;
        -moz-transition: all .1s;
        -ms-transition: all .1s;
        transition: all .1s;
        font-size: 36px;
        font-weight: bold;
    }

    .switch-date .prev {
        left: 0;
        opacity: 0;
        border-radius: 0 5px 5px 0;
    }

    .switch-date .prev.show {
        opacity: 1;
    }

    .switch-date .next {
        right: 0;
        opacity: 0;
        border-radius: 5px 0 0 5px;
    }

    .switch-date .next.show {
        opacity: 1;
    }

    .callback-totoday {
        position: fixed;
        bottom: 15px;
        z-index: 2000;
        width: 100px;
        height: 40px;
        background-color: #dedede;
        line-height: 40px;
        margin-left: -50px;
        left: 50%;
        font-size: 14px;
        border-radius: 16px;
        box-shadow: 0px 0px 20px -3px #b3b3b3;
        color: #333;
    }

    .callback-totoday .icon-fanhui {
        margin: 0 7px;
    }

</style>