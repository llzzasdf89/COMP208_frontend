export const detailTemplateCommonData = {
  data () {
    return {
      languages: ['English', 'French', 'Germany', 'Chinese'],
      selectedLangauge: '',
      languageRules: [v => !!v || 'Language must be selected'],
      inputRules: [v => !!v || 'Input is required'],
      input: ''
    }
  },
  computed: {
    hint: function () {
      return this.$route.params.hint
    },
    endSentence: function () {
      return this.$route.params.endSentence
    }
  },
  methods: {
    selectLanguage: function (e) {
      this.$data.selectedLangauge = e
      this.$emit('select', e)
    },
    subscribe: function (e) {
      this.$data.input = e
      this.$emit('input', e)
    }
  }
}
