<template>
  <div>
    <group>
      <cell   @click.native="onClick"></cell>
      <cell  @click.native="onClick" :is-loading="!money" :value="money"></cell>
      <cell  disabled is-link></cell>
    </group>

    <group >
      <cell is-link>
        <span slot="title" style="color:green;"><span style="vertical-align:middle;"></span> <badge text="1"></badge></span>
      </cell>
      <cell  is-link></cell>
      <cell  is-link></cell>
      <cell  is-link>
        <img slot="icon" width="20" style="display:block;margin-right:5px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=">
      </cell>
    </group>

    <group label-width="5em" title="Align-items">
      <cell primary="content" title="default" value="long long long longlong longlong longlong longlong longlong longlong longlong longlong long"></cell>
      <cell title="flex-start" align-items="flex-start" value="long long long longlong longlong longlong longlong longlong longlong longlong longlong long"></cell>
    </group>

    <group >
      <cell
     
      is-link
      :border-intent="false"
      :arrow-direction="showContent001 ? 'up' : 'down'"
      @click.native="showContent001 = !showContent001"></cell>

      <template v-if="showContent001">
        <cell-box :border-intent="false" class="sub-item" is-link>content 001</cell-box>
        <cell-box class="sub-item" is-link>content 001</cell-box>
        <cell-box class="sub-item" is-link>content 001</cell-box>
      </template>

      <cell
      
      is-link
      :border-intent="false"
      :arrow-direction="showContent002 ? 'up' : 'down'"
      @click.native="showContent002 = !showContent002"></cell>

      <template v-if="showContent002">
        <cell-form-preview :border-intent="false" :list="list"></cell-form-preview>
      </template>

      <cell
     
      is-link
      :border-intent="false"
      :arrow-direction="showContent003 ? 'up' : 'down'"
      @click.native="showContent003 = !showContent003"></cell>

      <template v-if="showContent003">
        <cell-box :border-intent="false" class="sub-item">I'm content 003</cell-box>
      </template>

      <cell
      is-link
      :border-intent="false"
      :arrow-direction="showContent004 ? 'up' : 'down'"
      @click.native="showContent004 = !showContent004"></cell>

      <p class="slide" :class="showContent004?'animate':''">blablabla...<br/>blablabla...<br/>blablabla...<br/>blablabla...</p>

    </group>

    <group >
      <cell >
        <div>
          <span style="color: green"></span>
        </div>
      </cell>
    </group>

    <group >
      <cell   link="/component/radio" inline-desc='link="/component/radio"'></cell>
      <cell   :link="{path:'/demo'}" inline-desc=':link={path:"/demo"}'></cell>
      <cell   link="https://vux.li" inline-desc='link="https://vux.li"'></cell>
    </group>
  </div>
</template>



<script>
import { Cell, CellBox, CellFormPreview, Group, Badge } from 'vux'
export default {
  mounted () {
    setTimeout(() => {
      this.money = -1024
    }, 2000)
  },
  components: {
    Group,
    Cell,
    CellFormPreview,
    CellBox,
    Badge
  },
  methods: {
    onClick () {
      console.log('on click')
    }
  },
  data () {
    return {
      list: [{
        label: 'Apple',
        value: '3.29'
      }, {
        label: 'Banana',
        value: '1.04'
      }, {
        label: 'Fish',
        value: '8.00'
      }],
      money: null,
      showContent001: false,
      showContent002: false,
      showContent003: false,
      showContent004: false
    }
  }
}
</script>

<style scoped>
.sub-item {
  color: #888;
}
.slide {
  padding: 0 20px;
  overflow: hidden;
  max-height: 0;
  transition: max-height .5s cubic-bezier(0, 1, 0, 1) -.1s;
}
.animate {
  max-height: 9999px;
  transition-timing-function: cubic-bezier(0.5, 0, 1, 0);
  transition-delay: 0s;
}
</style>