import { List, ListItem } from '@mui/material'
import { routes, staticUrls } from 'common/routes'
import ExternalLink from 'components/common/ExternalLink'
import { ContentType } from './content-type'
import ContentTypography from './ContentTypography'

export const COMMON_QUESTIONS: ContentType[] = [
  {
    visible: true,
    header: 'Какво е Подкрепи.бг?',
    content: (
      <ContentTypography>
        Ние сме общност от доброволци, обединени от идеята да създаваме устойчиви решения за
        развитието на дарителството в България. Нашият основен проект е разработването и
        реализацията на сигурна, дигитална платформа с отворен код за набиране на дарения. Вярваме,
        че това е начинът да:
        <List>
          <ListItem>- помогнем на повече нуждаещи се.</ListItem>
          <ListItem>- съкратим времето за обработка на кампаниите.</ListItem>
          <ListItem>- опростим управлението им.</ListItem>
          <ListItem>
            - дадем възможност за едновременна работа по голям брой кампании и предоставим по-лесен
            достъп за осъществяване на контрол над работата на платформата.
          </ListItem>
        </List>
        Ние предлагаме различен модел на управление, базиран на безкомпромисна прозрачност,
        самоиздръжка без комисиона от кампаниите и достойно заплащане на бъдещите служители на
        организацията. Принципи, в които вярваме и сме твърдо решени да следваме неотклонно!
      </ContentTypography>
    ),
  },
  {
    visible: true,
    header: 'Какво е „безкомпромисна прозрачност”?',
    content: (
      <ContentTypography>
        Нашето разбиране за „безкомпромисна прозрачност” е:
        <List>
          <ListItem>
            - Да публикуваме възможно най-бързо и най-детайлно информация за всичко случващо се,
            спазвайки закона за защита на личните данни и GDPR. За нас е важно да се отчитаме
            постоянно, а не да го правим веднъж годишно.
          </ListItem>
          <ListItem>
            - Да не чакаме да ни поискат информация, а всеки който се интересува, да има лесен
            достъп до нея.
          </ListItem>
          <ListItem>
            - Да автоматизираме този процес, за да не може никой от организацията ни или отвън да ѝ
            влияе. Разбираме, че така работата за нас ще е много, но можем да опростим процеса и
            намерим баланса, като дефинираме рисковете, приоритизираме и поставим контроли на
            важните места.
          </ListItem>
        </List>
      </ContentTypography>
    ),
  },
  {
    visible: true,
    header: 'Какви са технологичните ви предимства?',
    content: (
      <ContentTypography>
        <p>
          Използваме модерни решения и технологии за подсигуряване на платформата – React, Next.js
          като frontend, PostgreSQL като база данни, а цялостната инфраструктура се управлява на
          принципа на Infrastructure-as-Codе. Възможно ли е да постигнем целта си и по по-прост
          начин и не е ли това твърде голямо усложняване на проекта? Да, но целта ни е и да дадем на
          тепърва навлизащите добър пример как се изгражда високотехнологична и мащабируема система.
          И навлизайки в нейните специфики, те да станат по-добри професионалисти. Подкрепи.бг е
          платформа с отворен код, базирана в{' '}
          <ExternalLink variant="subtitle1" href={staticUrls.github}>
            GitHub
          </ExternalLink>
          . И като всяка една система с отворен код, всеки може да провери начинът, по който е
          написана. Да предложи промяна, подобрение – вече имаме такива от програмист от Токио,
          Япония. Целта ни е да създадем устойчиво решение и общност, която да работи активно и
          дългосрочно по проекта.
        </p>
      </ContentTypography>
    ),
  },
  {
    visible: true,
    header: 'Какво представляват „устойчивите решения”?',
    content: (
      <ContentTypography>
        Една африканска поговорка гласи „Ако искаш да стигнеш бързо, тръгни сам, ако искаш да
        стигнеш далеч, вървете заедно”. Верни на нея, ние избрахме да извървим пътя си заедно – чрез
        общи усилия, с добри и лоши моменти. Без „фойерверки”, които рязко да избухнат, но също така
        бързо да оставят всичко да потъне в мрак. Имаме обща визия и работим за нея – кой колкото и
        когато има възможност. Изпълнителите се променят с времето, но каузата остава същата.
        Обществото ни не се изчерпва само с разработчици. Сред нас има дизайнери, маркетолози,
        финансисти, прависти, експерти по европейски програми, консултанти, преподаватели,
        управляващи собствен бизнес и др, живеещи и работещи у нас и в чужбина. Хора, постигнали
        много в личен план, които осъзнато и доброволно искат да помогнат с уменията си на
        нуждаещите се. Мотивацията им е самият екип, желанието му да се развива, да се учи от опита
        на другите, да има приемственост и да предложи решения, които да устоят дори и при временен
        неуспех. Разнообразието на експертите в екипа, наличието на много млади, ентусиазмът и
        постоянството на всички са гаранция за постигане на трайни резултати.
      </ContentTypography>
    ),
  },
  {
    visible: true,
    header: 'Как се финансира Подкрепи.бг?',
    content: (
      <ContentTypography>
        Подкрепи.бг НЕ удържа комисиони или такси за дейността си от събраните средства за
        кампаниите. Концепцията за издръжката ни е разходите в това перо да са минимални заради
        основно доброволния труд на екипа. Осигуряването на финансови ресурси за платени позиции и
        разходи по платформата ще става чрез специални, насочени по волята на дарителите дарения или
        специално организирана кампания. Други канали, по които се приемат средства, са корпоративни
        дарения и годишният членски внос на членовете на сдружението. Всички отчети на сдружението
        до момента можете да видите{' '}
        <ExternalLink variant="subtitle1" href={routes.reports}>
          тук.
        </ExternalLink>
        .
      </ContentTypography>
    ),
  },
  {
    visible: true,
    header: 'Защо правите нова платформа вместо да помогнете на вече съществуващите?',
    content: (
      <ContentTypography>
        От технологична гледна точка – понякога е по-добре да се създаде дадено решение наново
        вместо да се правят опити да се преправят съществуващите такива. Технологията, която
        създаваме, е с отворен код и ще е достъпна за всеки желаещ да я използва. От управленска
        гледна точка – ние искаме да предложим нов начин на управление на дарителския процес в
        България. Единственият начин да покажем жизнеността на подобен модел на работа е да дадем
        работещ пример за това. Podkrepi.bg е нашият начин да докажем на практика нашата визия.
      </ContentTypography>
    ),
  },
  {
    header: 'Защо ви отне толкова време, за да стартирате?',
    content: (
      <ContentTypography>
        Процесът по формиране на добър екип от хора с общи принципи и етика на работа отнема много
        време. Некомерсиалните инициативи изискват още повече време и усилия. А изцяло
        доброволческите такива – изключителна прецизност при формирането на основен екип и начините
        за участие на широк кръг доброволци. Водени сме от желанието да създадем устойчив модел на
        работа на Подкрепи.бг, който не зависи от активността и участието на конкретна организация
        или личност. Стараем се да сме максимално подготвени, за да бъдем от полза на нуждаещите се
        и дарителите. И не на последно място, да сме сигурни, че следваме основните принципи на
        сдружението. За нас е по-важно да стигнем далеч, дори и понякога да се движим бавно!
      </ContentTypography>
    ),
  },
  {
    header: 'Независима организация ли сте?',
    content: (
      <ContentTypography>
        Да, напълно. Сдружение Подкрепи.бг не е обвързано с влияния от политически и друг тип
        организации и субекти. Можете да видите повече в Условията за ползване на Подкрепи.бг тук.
      </ContentTypography>
    ),
  },
  {
    header: 'Как мога да направя предложение или да споделя идея за подобрение?',
    content: (
      <ContentTypography>
        Високо ценим всяко такова включване от общността! Пишете ни на info@podkrepi.bg или директно
        напишете задание в нашия Github проект!
      </ContentTypography>
    ),
  },
]
