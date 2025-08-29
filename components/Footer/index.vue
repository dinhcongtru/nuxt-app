<template>
  <footer id="footer" class="py-4 bg-slate-900">
    <div class="inner max-w-5xl mx-auto pt-3 px-12 flex">
      <nav class="nav_footer service_customer flex-1">
        <ul>
          <li class="title pt-2 pr-5 pb-3 text-base leading-6 font-semibold">
            <p class="text-white">Dịch vụ khách hàng</p>
          </li>
          <li v-for="(e, i) in serviceCustomer" :key="i" class="item pt-2">
            <NuxtLink to="#" class="text-[#bfcad9] text-sm">{{ e }}</NuxtLink>
          </li>
        </ul>
      </nav>
      <nav class="nav_footer about flex-1">
        <ul>
          <li class="title pt-2 pr-5 pb-3 text-base leading-6 font-semibold">
            <p class="text-white">Về YODY</p>
          </li>
          <li v-for="(e, i) in aboutYody" :key="i" class="item pt-2">
            <NuxtLink to="#" class="text-[#bfcad9] text-sm">{{ e }}</NuxtLink>
          </li>
        </ul>
        <ul class="address">
          <li class="title pt-2 pr-5 pb-3 text-base leading-6 font-semibold">
            <p class="text-white">Địa chỉ liên hệ</p>
          </li>
          <li class="pt-1">
            <p class="text-[#bfcad9] text-sm">
              Địa chỉ: Đường An Định - Phường Việt Hòa - Thành phố Hải Dương
            </p>
          </li>
        </ul>
      </nav>
      <nav class="nav_footer fb flex-1">
        <ul>
          <li class="title pt-2 pr-5 pb-3 text-base leading-6 font-semibold">
            <p class="text-white">YODY lắng nghe bạn</p>
          </li>
          <li class="pb-6">
            <p class="text-white text-sm">
              Chúng tôi luôn trân trọng và mong đợi nhận được mọi ý kiến đóng
              góp từ khách hàng để có thể nâng cấp trải nghiệm dịch vụ và sản
              phẩm tốt hơn nữa.
            </p>
          </li>
          <li class="pb-3">
            <div class="item_social flex items-center gap-3 text-[#bfcad9]">
              <Icon name="uil:phone" class="text-[28px]" />
              <span class="text-sm">
                <span class="block">Liên hệ đặt hàng</span>
                <span class="block">024 999 86 999</span>
              </span>
            </div>
          </li>
          <li class="pb-3">
            <div class="item_social flex items-center gap-3 text-[#bfcad9]">
              <Icon name="uil:comment-question" class="text-[28px]" />
              <span class="text-sm">
                <span class="block">Góp ý khiếu nại</span>
                <span class="block">1800 2086</span>
              </span>
            </div>
          </li>
          <li class="pb-4">
            <div class="item_social flex items-center gap-3 text-[#bfcad9]">
              <Icon name="uil:envelope-question" class="text-[28px]" />
              <span class="text-sm">
                <span>Email</span>
                <span>chamsockhachhang@yody.vn</span>
              </span>
            </div>
          </li>
          <li>
            <ul class="list_social flex items-center gap-3">
              <li>
                <Icon name="uil:facebook" class="text-[27px] text-white" />
              </li>
              <li>
                <Icon name="uil:instagram" class="text-[27px] text-white" />
              </li>
              <li>
                <Icon name="uil:line" class="text-[27px] text-white" />
              </li>
              <li>
                <Icon name="uil:youtube" class="text-[27px] text-white" />
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
    <div class="inner border-t border-[#D9D9D9] border-solid mt-5">
      <div class="wrapper max-w-5xl mx-auto pt-4 px-12">
        <span class="title text-base text-white leading-6 pb-2">@ CÔNG TY CỔ PHẦN THỜI TRANG YODY</span>
        <div class="coppy_rigt text-white text-sm flex gap-[50px]">
          <p class="pb-2 max-w-[485px]">
            Mã số doanh nghiệp: 0801206940. Giấy chứng nhận đăng ký doanh nghiệp
            do Sở Kế hoạch và Đầu tư TP Hải Dương cấp lần đầu ngày 04/03/2017
          </p>
          <ul class="flex items-center gap-5">
            <li>
              <img
                src="/assets/images/bct_v1.webp"
                width="106"
                height="40"
                alt="privacy"
              />
            </li>
            <li>
              <img
                src="/assets/images/dmca_v1.webp"
                width="80"
                height="40"
                alt="privacy"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
<script lang="ts" setup>
import { serviceCustomer, aboutYody } from "~/constants/footer";
</script>
<style lang="css"></style>
