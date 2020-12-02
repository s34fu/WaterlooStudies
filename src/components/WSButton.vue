<template>
    <div>
      <b-button :variant="variant">{{ msg }}</b-button>
    </div>
</template>

<script>
export default {
	name: 'WSButton',
	props: {
		variant: String,
		msg: String
	}
};
</script>