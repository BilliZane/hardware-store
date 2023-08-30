<template>
  <div class="label-disount">-{{ discountPercent }}%</div>
</template>

<script>
export default {
  props: {
    discountPercent: {
      type: Number
    }
  }
}
</script>
