import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Icon',
  setup() {
    return () => {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 32 32"
        >
          <path
            d="M26 22v3.586l-9-9V5.828l2.586 2.586L21 7l-5-5l-5 5l1.414 1.414L15 5.828v10.758l-9 9V22H4v7h7v-2H7.414L16 18.414L24.586 27H21v2h7v-7h-2z"
            fill="currentColor"
          ></path>
        </svg>
      )
    }
  }
})
