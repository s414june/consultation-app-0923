<template>
  <div class="card relative z-2">
    <Head>
      <Title>生活諮詢網 - 您的生活好幫手</Title>
    </Head>
    <Menubar
      :model="items"
      class="justify-between"
    >
      <template #start>
        <div class="flex items-center">
          <img
            alt="logo"
            src="~/assets/images/logo.png"
            width="30"
            class="mr-2"
          />
          <h1 class="font-bold text-xl">生活諮詢網</h1>
        </div>
      </template>
      <template #item="{ label, item, props, root, hasSubmenu }">
        <router-link
          v-if="item.route"
          v-slot="routerProps"
          :to="item.route"
          custom
        >
          <a
            :href="routerProps.href"
            v-bind="props.action"
          >
            <span v-bind="props.label">{{ label }}</span>
          </a>
        </router-link>
        <a
          v-else
          :href="item.url"
          :target="item.target"
          v-bind="props.action"
        >
          <span v-bind="props.label">{{ label }}</span>
          <span
            :class="[
              hasSubmenu &&
                (root ? 'pi pi-fw pi-angle-down' : 'pi pi-fw pi-angle-right'),
            ]"
            class="submenu-icon ml-2"
          />
        </a>
      </template>
      <template #end>
        <a href="https://lin.ee/Ud0FbbD">
          <Button
            label="Line諮詢"
            severity="info"
            rounded
          />
        </a>
      </template>
    </Menubar>
    <section class="flex lg:flex-row flex-col shadow-md">
      <div
        class="lg:w-1/2 w-full flex justify-center items-center bg-white py-10"
      >
        <div class="text-center">
          <h1 class="font-bold text-2xl text-sky-600">生活諮詢網</h1>
          <h2 class="text-2xl font-bold">您的生活好幫手</h2>
        </div>
      </div>
      <div class="lg:w-1/2 w-full overflow-hidden h-80 lg:order-1 -order-1">
        <img
          alt="user header"
          src="~/assets/images/home.jpg"
        />
      </div>
    </section>
    <section
      class="my-10"
      id="about"
    >
      <h2 class="text-center text-2xl font-bold text-sky-600 my-3">關於我們</h2>
      <div class="flex justify-center flex-wrap">我們是您的生活好幫手~^^</div>
    </section>
    <section class="my-10">
      <h2 class="text-center text-2xl font-bold text-sky-600 my-3">服務項目</h2>
      <div class="flex justify-center flex-wrap">
        <template v-for="item in items[1].items">
          <Card class="w-72 m-2">
            <template #title>{{ item.label }}</template>
            <!-- <template #subtitle> Card subtitle </template>
            <template #content>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Inventore sed consequuntur error repudiandae numquam deserunt
                quisquam repellat libero asperiores earum nam nobis, culpa ratione
                quam perferendis esse, cupiditate neque quas!
              </p>
            </template>
            <template #footer>
              <Button
                icon="pi pi-check"
                label="Save"
              />
              <Button
                icon="pi pi-times"
                label="Cancel"
                severity="secondary"
                style="margin-left: 0.5em"
              />
            </template> -->
          </Card>
        </template>
      </div>
    </section>
  </div>
  <footer class="bg-sky-900 w-full text-white flex justify-center p-4">
    <p class="text-sm">Copyright © 2023 生活諮詢網 All rights reserved.</p>
  </footer>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
  {
    label: "關於我們",
    route: "#about",
  },
  {
    label: "服務項目",
    items: [
      {
        label: "工商登記",
        items: [
          {
            label: "Bookmark",
          },
          {
            label: "Video",
          },
        ],
      },
      {
        label: "勞資爭議",
        items: [
          {
            label: "Bookmark",
          },
          {
            label: "Video",
          },
        ],
      },
      {
        label: "社會團體",
        items: [
          {
            label: "Bookmark",
          },
          {
            label: "Video",
          },
        ],
      },
      {
        label: "社會福利",
        items: [
          {
            label: "Bookmark",
          },
          {
            label: "Video",
          },
        ],
      },
      {
        label: "住宿申請",
        items: [
          {
            label: "Bookmark",
          },
          {
            label: "Video",
          },
        ],
      },
      {
        label: "簡報設計",
        items: [
          {
            label: "Bookmark",
          },
          {
            label: "Video",
          },
        ],
      },
      {
        label: "代繕代擬",
        items: [
          {
            label: "Bookmark",
          },
          {
            label: "Video",
          },
        ],
      },
      {
        label: "親子教育",
        items: [
          {
            label: "Bookmark",
          },
          {
            label: "Video",
          },
        ],
      },
      {
        label: "家事調解",
        items: [
          {
            label: "Bookmark",
          },
          {
            label: "Video",
          },
        ],
      },
    ],
  },
]);

const cards = ref([
  {
    title: "工商登記",
  },
  {
    title: "勞資爭議",
  },
  {
    title: "社會團體",
  },
  {
    title: "簡報設計",
  },
  {
    title: "代繕代擬",
  },
  {
    title: "親子教育",
  },
  {
    title: "親子教育",
  },
  {
    title: "親子教育",
  },
  {
    title: "親子教育",
  },
  {
    title: "親子教育",
  },
  {
    title: "親子教育",
  },
]);
</script>
