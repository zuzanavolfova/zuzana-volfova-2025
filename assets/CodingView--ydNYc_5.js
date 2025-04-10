import {
  d,
  r as u,
  w as p,
  c as o,
  a as t,
  t as n,
  o as s,
  _ as g,
  b as l,
  F as m,
  e as h,
  u as v,
  f,
} from './index-B1AvMOTR.js'
const b = { class: 'card__container' },
  S = { class: 'card__item' },
  D = { class: 'card__item__title' },
  y = { class: 'card__item__image' },
  T = ['src', 'alt'],
  z = { class: 'card__item__perex' },
  V = { class: 'card__item__button' },
  I = d({
    __name: 'CardComponent',
    props: {
      cardTitle: { type: String, required: !1 },
      cardImage: { type: String, required: !1 },
      cardDescriptionShort: { type: String, required: !1 },
      cardDescription: { type: String, required: !1 },
      buttonTitle: { type: String, required: !1, default: 'GitHub repository' },
      buttonRedirect: { type: String, required: !1 },
    },
    setup(a) {
      const i = a,
        r = u('')
      return (
        p(async () => {
          if (!i.cardImage) {
            r.value = ''
            return
          }
          try {
            const e = await g(() => import(`../assets/images/${i.cardImage}`), [])
            r.value = e.default
          } catch (e) {
            console.error('Failed to load image:', e), (r.value = '')
          }
        }),
        (e, c) => (
          s(),
          o('div', b, [
            t('div', S, [
              t('h4', D, n(a.cardTitle), 1),
              t('p', y, [t('img', { src: r.value, alt: a.cardImage, height: '80px' }, null, 8, T)]),
              t('p', z, n(a.cardDescription), 1),
              t('p', null, [t('button', V, n(a.buttonTitle), 1)]),
            ]),
          ])
        )
      )
    },
  }),
  R = l(I, [['__scopeId', 'data-v-740164ec']]),
  j = [
    {
      cardTitle: 'Zuzana Volfová prezentace',
      cardImage: 'cv.png',
      cardDescriptionShort: 'Zuzana Volfová prezentace',
      cardDescription: 'Vue.js, Pinia, Typescript, Bootstrap, Git, fetch',
      buttonRedirect: 'https://github.com/zuzanavolfova/zuzana-volfova-2025',
    },
    {
      cardTitle: 'React projekt',
      cardImage: 'react.png',
      cardDescriptionShort: 'React project',
      cardDescription: 'React, TypeScript, @mui/x-data-grid, formik',
      buttonRedirect: 'https://github.com/zuzanavolfova/react-project',
    },
    {
      cardTitle: 'Vue.js s externí knihovnou',
      cardImage: 'vue.png',
      cardDescriptionShort: 'Vue.js s externí knihovnou',
      cardDescription: 'Vue.js, Pinia, Typescript, PrimeVue, fetch, GIT',
      buttonRedirect: 'https://github.com/zuzanavolfova/cz-nic',
    },
  ],
  x = { class: 'coding' },
  C = { class: 'coding__title' },
  k = { class: 'coding__content' },
  $ = { class: 'coding__content__items' },
  q = d({
    __name: 'CodingView',
    setup(a) {
      const i = j
      return (r, e) => (
        s(),
        o('div', x, [
          t('h2', C, n(r.$t('coding-h')), 1),
          t('div', k, [
            e[0] || (e[0] = t('h3', null, 'Vue.js, React', -1)),
            t('div', $, [
              (s(!0),
              o(
                m,
                null,
                h(
                  v(i),
                  (c, _) => (
                    s(),
                    o('div', { class: 'coding__content__item', key: _ }, [
                      f(
                        R,
                        {
                          'card-title': c.cardTitle,
                          'card-image': c.cardImage,
                          'card-description-short': c.cardDescriptionShort,
                          'card-description': c.cardDescription,
                          'button-redirect': c.buttonRedirect,
                        },
                        null,
                        8,
                        [
                          'card-title',
                          'card-image',
                          'card-description-short',
                          'card-description',
                          'button-redirect',
                        ],
                      ),
                    ])
                  ),
                ),
                128,
              )),
            ]),
            e[1] || (e[1] = t('div', null, [t('h3', null, 'HTML, CSS')], -1)),
            e[2] || (e[2] = t('div', null, [t('h3', null, 'JavaScript')], -1)),
          ]),
        ])
      )
    },
  }),
  P = l(q, [['__scopeId', 'data-v-95286d03']])
export { P as default }
