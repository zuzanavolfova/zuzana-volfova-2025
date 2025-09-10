<script setup lang="ts">
import { ref, nextTick, getCurrentInstance } from 'vue'
import chatbotCs from '../locales/chatbot-cs.json'
import chatbotEn from '../locales/chatbot-en.json'

interface Message {
  id: number
  content: string
  isBot: boolean
  timestamp: Date
}

const messages = ref<Message[]>([])
const currentMessage = ref('')
const isTyping = ref(false)
const chatContainer = ref<HTMLElement>()
const isOpen = ref(false)
const messageId = ref(0)
const instance = getCurrentInstance()
const t = (key: string, params?: any) => {
  const tFunc = instance?.appContext.config.globalProperties.$t
  return tFunc ? tFunc(key, params) : key
}
const i18next = instance?.appContext.config.globalProperties.$i18next || { language: 'cs' }

const getChatbotText = (key: string) => {
  const chatbotTexts = i18next.language === 'en' ? chatbotEn : chatbotCs
  return chatbotTexts[key as keyof typeof chatbotTexts] || key
}

const getCvData = () => {
  if (i18next.language === 'en') {
    return {
      education: [
        {
          title: 'TypeScript, React',
          institution: 'Udemy (Maximilian Schwarzmüller course)',
          description: t('course-info', { lectures: '338+726', videoHours: '94' }),
        },
        {
          title: 'Vue.js - The Complete Guide',
          institution: 'Udemy (Maximilian Schwarzmüller course)',
          description: t('course-info', { lectures: '333', videoHours: '32' }),
        },
        {
          title: t('coding-course'),
          institution: 'Czechitas - semester course',
          description: 'HTML, CSS, BEM, SASS, 11ty figma, GIMP, GitHub, Visual Studio Code',
        },
        {
          title: 'JavaScript1',
          institution: 'Czechitas - semester course',
          description: 'JavaScript, GitHub, Visual Studio Code',
        },
        {
          title: 'UX design Professional Certificate',
          institution: t('czechitas-google-semestr-course'),
          description: 'Figma, Adobe XD, Jamboard, Miro',
        },
        {
          title: t('culture-management'),
          institution: 'Masaryk University Brno',
          description: t('mgr-study-program'),
        },
      ],
      workExperience: [
        {
          title: `Vue.js frontend ${t('developer')}`,
          company: 'Rieter CZ',
          period: '2022 - 2025',
          description: t('work-descr-rieter'),
        },
        {
          title: 'Back office manager',
          company: 'KROUPAHELÁN law firm, s.r.o.',
          period: '2015 - 2016',
          description: t('work-descr-KHAK'),
        },
        {
          title: 'Manager',
          company: 'HELLO Language School',
          period: '2014',
          description: t('work-descr-hello'),
        },
        {
          title: t('coordinator-language-courses'),
          company: 'HELLO Language School',
          period: '2013 - 2014',
          description: t('work-descr-hello-coordinator'),
        },
      ],
      skills: [
        'Vue.js',
        'TypeScript',
        'React',
        'JavaScript',
        'HTML',
        'CSS',
        'SCSS',
        'Tailwind',
        'Python',
        'UX Design',
        'Figma',
        'Adobe XD',
      ],
    }
  } else {
    return {
      education: [
        {
          title: 'TypeScript, React',
          institution: 'Udemy (Maximilian Schwarzmüller course)',
          description: t('course-info', { lectures: '338+726', videoHours: '94' }),
        },
        {
          title: 'Vue.js - The Complete Guide',
          institution: 'Udemy (Maximilian Schwarzmüller course)',
          description: t('course-info', { lectures: '333', videoHours: '32' }),
        },
        {
          title: t('coding-course'),
          institution: t('czechitas-semestr-course'),
          description: 'HTML, CSS, BEM, SASS, 11ty figma, GIMP, GitHub, Visual Studio Code',
        },
        {
          title: 'JavaScript1',
          institution: t('czechitas-semestr-course'),
          description: 'JavaScript, GitHub, Visual Studio Code',
        },
        {
          title: 'UX design Professional Certificate',
          institution: t('czechitas-google-semestr-course'),
          description: 'Figma, Adobe XD, Jamboard, Miro',
        },
        {
          title: t('culture-management'),
          institution: 'Masarykova univerzita Brno',
          description: t('mgr-study-program'),
        },
      ],
      workExperience: [
        {
          title: `Vue.js frontend ${t('developer')}`,
          company: 'Rieter CZ',
          period: '2022 - 2025',
          description: t('work-descr-rieter'),
        },
        {
          title: 'Back office manager',
          company: 'KROUPAHELÁN advokátní kancelář, s.r.o.',
          period: '2015 - 2016',
          description: t('work-descr-KHAK'),
        },
        {
          title: 'Manager',
          company: 'HELLO Language School',
          period: '2014',
          description: t('work-descr-hello'),
        },
        {
          title: t('coordinator-language-courses'),
          company: 'Jazyková škola HELLO',
          period: '2013 - 2014',
          description: t('work-descr-hello-coordinator'),
        },
      ],
      skills: [
        'Vue.js',
        'TypeScript',
        'React',
        'JavaScript',
        'HTML',
        'CSS',
        'SCSS',
        'Tailwind',
        'Python',
        'UX Design',
        'Figma',
        'Adobe XD',
      ],
    }
  }
}

const formatMessage = (content: string): string => {
  return content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
}

const addMessage = (content: string, isBot: boolean = false) => {
  messages.value.push({
    id: messageId.value++,
    content: formatMessage(content),
    isBot,
    timestamp: new Date(),
  })
  scrollToBottom()
}

const scrollToBottom = async () => {
  await nextTick()
  if (chatContainer.value) {
    chatContainer.value.scrollTop = chatContainer.value.scrollHeight
  }
}

const sendMessage = async () => {
  if (!currentMessage.value.trim()) return

  const userMessage = currentMessage.value
  addMessage(userMessage, false)
  currentMessage.value = ''

  isTyping.value = true
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const response = generateResponse(userMessage)
  isTyping.value = false
  addMessage(response, true)
}

const generateResponse = (message: string): string => {
  const lowerMessage = message.toLowerCase()
  const cvData = getCvData()
  const isEnglish = i18next.language === 'en'

  console.log('Chatbot - Message:', lowerMessage)
  console.log('Chatbot - Language:', i18next.language)

  // Education keywords
  const educationKeywords = isEnglish
    ? ['educat', 'course', 'school', 'study', 'learn', 'degree', 'univers']
    : ['vzděl', 'kurz', 'škol', 'studi', 'učen', 'titul', 'univers', 'vysok']

  // Work keywords
  const workKeywords = isEnglish
    ? ['work', 'job', 'experien', 'position', 'career', 'employ']
    : ['prác', 'zaku', 'zkuš', 'pozic', 'kariér', 'zaměst']

  // Skills keywords
  const skillsKeywords = isEnglish
    ? ['skill', 'technolog', 'program', 'abilit', 'capabilit']
    : ['doved', 'skill', 'technolog', 'program', 'schop', 'umí']

  // IT Education keywords
  const itEducationKeywords = isEnglish
    ? ['it', 'computer', 'programming', 'coding', 'development', 'software']
    : ['it', 'počítač', 'programování', 'kodér', 'vývoj', 'software']

  // Contact keywords
  const contactKeywords = isEnglish
    ? ['contact', 'email', 'phone', 'reach', 'call']
    : ['kontakt', 'email', 'telefon', 'spojení', 'volat']

  // Hobbies keywords
  const hobbiesKeywords = isEnglish
    ? ['hobby', 'hobbies', 'free time', 'leisure', 'like', 'enjoy', 'fun']
    : ['koníček', 'koníčky', 'volný čas', 'volnem', 'ráda', 'baví', 'zábava', 'hobby']

  // Greeting keywords
  const greetingKeywords = isEnglish
    ? ['hello', 'hi', 'good', 'hey', 'greet']
    : ['ahoj', 'zdravím', 'dobr', 'čau', 'nazdar']

  // Specific question about university - check BEFORE general education
  if (
    lowerMessage.includes('vysok') ||
    lowerMessage.includes('univerzit')
  ) {
    const university = cvData.education.find(
      (edu) =>
        String(edu.description).toLowerCase().includes('magister'),
    )
    if (university) {
      return `${university.title} - ${university.institution}: ${university.description}`
    }
    return isEnglish
      ? "Master's degree in Culture Management from Masaryk University Brno"
      : 'Magisterský titul Management v kultuře z Masarykovy univerzity v Brně'
  }

  if (educationKeywords.some((keyword) => lowerMessage.includes(keyword))) {
    const educationList = cvData.education
      .map((edu) => `${edu.title} - ${edu.institution}: ${edu.description}`)
      .join('\n\n')
    const intro = getChatbotText('chatbot-education-intro')
    return `${intro}\n\n${educationList}`
  }

  if (workKeywords.some((keyword) => lowerMessage.includes(keyword))) {
    const workList = cvData.workExperience
      .map((work) => `${work.title} (${work.period})\n${work.company}: ${work.description}`)
      .join('\n\n')
    const intro = getChatbotText('chatbot-work-intro')
    return `${intro}\n\n${workList}`
  }

  if (itEducationKeywords.some((keyword) => lowerMessage.includes(keyword))) {
    const itCourses = cvData.education.filter((edu) => {
      const title = String(edu.title).toLowerCase()
      const description = String(edu.description).toLowerCase()
      const institution = String(edu.institution).toLowerCase()
      return (
        title.includes('typescript') ||
        title.includes('react') ||
        title.includes('vue') ||
        title.includes('javascript') ||
        title.includes('kodér') ||
        title.includes('coding') ||
        description.includes('html') ||
        description.includes('css') ||
        description.includes('javascript') ||
        description.includes('github') ||
        institution.includes('czechitas') ||
        institution.includes('udemy')
      )
    })

    if (itCourses.length > 0) {
      const coursesList = itCourses
        .map((course) => `**${course.title}** - ${course.institution}: ${course.description}`)
        .join('\n\n')
      const header = isEnglish ? 'IT Courses:' : 'IT kurzy:'
      return `${header}\n\n${coursesList}`
    }

    return getChatbotText('chatbot-it-education')
  }

  if (skillsKeywords.some((keyword) => lowerMessage.includes(keyword))) {
    const intro = getChatbotText('chatbot-skills-intro')
    return `${intro} ${cvData.skills.join(', ')}`
  }

  if (lowerMessage.includes('vue')) {
    const vueExperience = cvData.workExperience.find((work) =>
      String(work.title).includes('Vue.js'),
    )
    const vueEducation = cvData.education.find((edu) => String(edu.title).includes('Vue.js'))
    const intro = getChatbotText('chatbot-vue-intro')
    const workExp = getChatbotText('chatbot-work-experience')
    const education = getChatbotText('chatbot-education')
    return `${intro}\n\n${workExp} ${vueExperience?.description}\n\n${education} ${vueEducation?.description}`
  }

  if (lowerMessage.includes('react')) {
    const reactEducation = cvData.education.find((edu) => String(edu.title).includes('React'))
    return `React: ${reactEducation?.description}`
  }

  if (lowerMessage.includes('typescript')) {
    const tsEducation = cvData.education.find((edu) => String(edu.title).includes('TypeScript'))
    return `TypeScript: ${tsEducation?.description}`
  }

  if (hobbiesKeywords.some((keyword) => lowerMessage.includes(keyword))) {
    return getChatbotText('chatbot-hobbies')
  }

  if (contactKeywords.some((keyword) => lowerMessage.includes(keyword))) {
    return getChatbotText('chatbot-contact-info')
  }

  if (greetingKeywords.some((keyword) => lowerMessage.includes(keyword))) {
    return getChatbotText('chatbot-greeting')
  }

  // Simple fallback responses for common queries
  if (lowerMessage.includes('co') || lowerMessage.includes('what')) {
    return getChatbotText('chatbot-help')
  }

  if (lowerMessage.includes('jak') || lowerMessage.includes('how')) {
    return getChatbotText('chatbot-help')
  }

  const noUnderstand = getChatbotText('chatbot-no-understand')
  const help = getChatbotText('chatbot-help')
  return `${noUnderstand} ${help}`
}

const toggleChat = () => {
  isOpen.value = !isOpen.value
  if (isOpen.value && messages.value.length === 0) {
    addMessage(getChatbotText('chatbot-greeting'), true)
  }
}

const handleKeyDown = (event: KeyboardEvent) => {
  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault()
    sendMessage()
  }
}
</script>

<template>
  <div class="chatbot">
    <div class="chatbot-toggle" @click="toggleChat" :class="{ active: isOpen }">
      <span v-if="!isOpen">💬</span>
      <span v-else>✕</span>
    </div>

    <transition name="slide-up">
      <div v-if="isOpen" class="chatbot-container">
        <div class="chatbot-header">
          <h3>{{ getChatbotText('chatbot-title') }}</h3>
          <button @click="toggleChat" class="close-btn">✕</button>
        </div>

        <div ref="chatContainer" class="chatbot-messages">
          <div
            v-for="message in messages"
            :key="message.id"
            class="message"
            :class="{ 'bot-message': message.isBot, 'user-message': !message.isBot }"
          >
            <div class="message-content" v-html="message.content"></div>
            <div class="message-time">
              {{
                message.timestamp.toLocaleTimeString('cs-CZ', {
                  hour: '2-digit',
                  minute: '2-digit',
                })
              }}
            </div>
          </div>

          <div v-if="isTyping" class="message bot-message typing">
            <div class="message-content">
              <div class="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>

        <div class="chatbot-input">
          <input
            v-model="currentMessage"
            @keydown="handleKeyDown"
            :placeholder="getChatbotText('chatbot-placeholder')"
            class="message-input"
          />
          <button @click="sendMessage" class="send-btn" :disabled="!currentMessage.trim()">
            ➤
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
.chatbot {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
}

.chatbot-toggle {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: var(--primary-color);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  }

  &.active {
    background: #e74c3c;
  }
}

.chatbot-container {
  position: absolute;
  bottom: 80px;
  right: 0;
  width: 350px;
  height: 500px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media (max-width: 480px) {
    width: 320px;
    height: 450px;
    right: -10px;
  }
}

.chatbot-header {
  background: var(--primary-color);
  color: white;
  padding: 8px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    margin: 0;
    color: white !important;
    font-size: 18px;
    font-weight: 600;
  }

  .close-btn {
    background: none;
    border: none;
    color: white;
    font-size: 20px;
    cursor: pointer;
    padding: 0;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      opacity: 0.8;
    }
  }
}

.chatbot-messages {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.message {
  display: flex;
  flex-direction: column;

  &.user-message {
    align-items: flex-end;

    .message-content {
      background: var(--primary-color);
      color: white;
      max-width: 80%;
    }
  }

  &.bot-message {
    align-items: flex-start;

    .message-content {
      background: #f1f3f4;
      color: #333;
      max-width: 85%;
    }
  }

  &.typing .message-content {
    padding: 16px 20px;
  }
}

.message-content {
  padding: 12px 16px;
  border-radius: 18px;
  font-size: 14px;
  line-height: 1.4;
  white-space: pre-line;
  word-wrap: break-word;
}

.message-time {
  font-size: 11px;
  color: #666;
  margin-top: 4px;
  opacity: 0.7;
}

.typing-indicator {
  display: flex;
  gap: 4px;

  span {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #999;
    animation: typing 1.4s infinite ease-in-out;

    &:nth-child(1) {
      animation-delay: -0.32s;
    }
    &:nth-child(2) {
      animation-delay: -0.16s;
    }
  }
}

@keyframes typing {
  0%,
  80%,
  100% {
    transform: scale(0.8);
    opacity: 0.5;
  }
  40% {
    transform: scale(1);
    opacity: 1;
  }
}

.chatbot-input {
  display: flex;
  padding: 16px;
  border-top: 1px solid #e1e5e9;
  gap: 8px;
}

.message-input {
  flex: 1;
  padding: 12px 16px;
  border: 1px solid #ddd;
  border-radius: 24px;
  font-size: 14px;
  outline: none;

  &:focus {
    border-color: var(--primary-color);
  }
}

.send-btn {
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  background: var(--primary-color);
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background: #357abd;
    transform: scale(1.05);
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.3s ease;
}

.slide-up-enter-from,
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.95);
}
</style>
