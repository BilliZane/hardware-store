<template>
  <div class="price-widget">
    <div class="price-widget__row">
      <span class="price-widget__label">Price:</span>
      <span class="price-widget__reset">Reset</span>
    </div>
    <form class="price-widget__row">
      <input
        type="number"
        min="100"
        placeholder="100"
        value=""
        class="price-widget__input"
      />
      <span class="price-widget__dash">-</span>
      <input
        type="number"
        min="1000"
        max="2000"
        placeholder="2000"
        value=""
        class="price-widget__input"
      />
      <button type="submit" class="price-widget__btn">Apply</button>
    </form>
  </div>
</template>
