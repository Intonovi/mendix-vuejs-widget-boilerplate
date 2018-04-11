<template>
  <div>
      <h1>Hello Vue World! Passed dummy key is: {{ widgetData.dummyKey }}</h1>
  </div>
</template>

<script>
    /**
     * This is the starting point of your Vue app/widget
     */
    export default {
        data() {
            return {
                widgetData: "",
            }
        },
        mounted() {
            let vm = this;
            console.log('Vue mounted!');

            // Necessary to have the data passed from the Mendix to Vue. The event is emitted from the HelloWorld.js file.
            VueWidgetEvents.$on('widget-loaded', data => {
                vm.widgetData = data.passedProps;
                console.log(data);
            })
        }
    }
</script>

<style lang="css" scoped>
    /**
     * You can change the "lang" to use sass, scss, or even more.
     */
</style>