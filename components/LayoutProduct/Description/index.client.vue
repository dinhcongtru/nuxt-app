<template>
    <div class="content_description flex-1 pt-2 pb-3 px-4">
        <h2 class="title text-base text-[#1c2430] font-semibold leading-[22px]">{{ props.productName }}</h2>
        <div class="product_social--proof py-2 text-base text-[#1c2430] flex items-center gap-1">
            <div class="product_social--proof-item flex items-center gap-1">
                <div class="flex items-center mr-3">
                    <span class="p_code inline-block text-[#292929] mr-1">BDK7178-BEE-10-11</span>
                    <Icon name="uil:copy" />
                </div>
                <span class="star flex items-center">
                    <Icon v-for="(_, i) in Array.from({ length: 5 })" :key="i" name="ic:round-star"
                        class="text-lg text-[#fcaf17]" />
                </span>
                <span class="total_star font-medium">4.8</span>
                <small class="text-[#6e87aa]">(120)</small>
            </div>
            <span class="text-[#eceff4]">|</span>
            <span class="selled">Đã bán <strong class="font-medium">22</strong></span>
        </div>
        <span class="box_price flex items-center gap-3 mb-2">
            <span class="price_discount font-semibold text-[#e14337] text-2xl">422.100 đ</span>
            <small class="p_curent text-lg text-[#6e87aa] line-through">469.000 đ</small>
            <span
                class="discount inline-block px-2 py-1 text-center text-[#e14337] bg-[#fceceb] text-xs font-medium rounded-[9999px]">10%</span>
        </span>
        <div class="views flex items-center py-3 gap-2 text-base text-[#1c2430]">
            <Icon name="uil:eye" class="text-[20px]" />
            <p class="flex items-center gap-1">
                <strong class="font-semibold">55</strong>người đang xem sản phẩm này
            </p>
        </div>
        <div class="stock_countdown py-3 text-base">
            <div class="stock_countdown_text pb-2">
                <p>Chỉ còn<strong class="font-semibold px-1">55</strong>sản phẩm trong kho!</p>
            </div>
            <div class="process relative flex h-1 items-stretch justify-start overflow-hidden rounded bg-[#f2f5f8]">
                <span class="process_bar rounded bg-[#e14337] w-[33.333333333333336%]"></span>
            </div>
        </div>
        <div class="colors py-3 text-[#1c2430] text-base font-medium">
            <span class="pb-2 inline-block">Màu sắc: Be</span>
            <ul class="color_list flex items-center gap-2">
                <li>
                    <NuxtImg src="/products/color_blue.webp"
                        class="rounded-[9999px] cursor-pointer border-transparent border-solid border" :width="44"
                        :height="44" />
                </li>
            </ul>
        </div>
        <div class="sizes colors py-3 text-[#1c2430] text-base">
            <div class="size_heading font-medium flex justify-between pb-2">
                Kích thước: M
                <span class="tbl_size text-[#366AE2] font-normal flex items-center">
                    <Icon name="ic:baseline-photo-size-select-actual" class="mr-1 text-lg" />
                    Bảng kích thước
                </span>
            </div>
            <ul class="size_list flex items-center gap-2 text-sm">
                <li
                    class="p-3 flex items-center justify-center cursor-pointer bg-[#1c2430] w-14 text-[#fff] rounded-lg border border-solid border-[#1c2430]">
                    <span>M</span>
                </li>
                <li
                    class="p-3 flex items-center justify-center cursor-pointer bg-[#fff] w-14 rounded-lg border border-solid border-[#cfd7e3]">
                    <span>L</span>
                </li>
                <li
                    class="p-3 flex items-center justify-center cursor-pointer bg-[#fff] w-14 rounded-lg border border-solid border-[#cfd7e3]">
                    <span>XL</span>
                </li>
            </ul>
        </div>
        <div class="btn_bottom mb-4">
            <ButtonSecondary state="primary" value="Xem cửa hàng còn sản phẩm" class="mb-3">
                <Icon name="uil:shop" />
            </ButtonSecondary>
            <ButtonSecondary value="Liên hệ đặt hàng">
                <NuxtImg src="/icons8-zalo.svg" :width="20" :height="20" alt="zalo" />
            </ButtonSecondary>
        </div>
        <div class="payments py-6 px-4">
            <div class="flex items-center justify-center gap-3 mb-3">
                <NuxtImg src="/zalopay.webp" :width="82" alt="zalo pay" />
                <NuxtImg src="/visa-card.webp" :width="39" alt="visa card" />
                <NuxtImg src="/master-card.webp" :width="46" alt="master-card" />
                <NuxtImg src="/vnpay-qr.webp" :width="63" alt="vnpay-qr" />
                <NuxtImg src="/momo.webp" :width="28" alt="momo" />
            </div>
            <p class="privacy text-center text-xs font-medium text-[#394960]">Đảm bảo thanh toán an toàn và bảo mật</p>
        </div>
        <ul class="policies_reduce py-3 text-[#394960]">
            <li class="pb-3">
                <div class="item flex items-center gap-2">
                    <Icon name="material-symbols-local-shipping-rounded" />
                    <span class="title font-semibold">Miễn phí vận chuyển:</span>
                    Đơn hàng từ 498k
                </div>
            </li>
            <li class="pb-3">
                <div class="item flex items-center gap-2">
                    <Icon name="uil:chart-line" />
                    <span class="title font-semibold">Miễn phí đổi trả:</span>
                    Tại 267+ cửa hàng trong 15 ngày
                </div>
            </li>
            <li>
                <div class="item flex items-center gap-2">
                    <Icon name="uil:clock" />
                    <span class="title font-semibold">Giao hàng:</span>
                    Từ 3 - 5 ngày trên cả nước
                </div>
            </li>
        </ul>
        <ul class="txt_desp">
            <li
                class="relative before:content-['.'] before:mr-3 before:font-bold before:top-[-3px] before:h-[17px] before:leading-[0px] before:inline-block before:relative before:text-[27px]">
                Bộ đồ mềm nhẹ, lành tính dành cho các bạn thiếu niên mặc nhà siêu thoải mái. Sản
                phẩm sử dụng vải Cotton Compact được dệt từ sợi bông USA cao cấp - Cotton bền vững:
                Góp phần bảo vệ môi trường sống. Thấm hút mồ hôi tốt, thoáng mát, rất thích hợp với
                thời tiết nóng ẩm tại Việt Nam. Co giãn nhẹ, phù hợp với chuyển động của cơ thể.
            </li>
        </ul>
    </div>
</template>
<script lang="ts" setup>
const props = defineProps<{
    productName: string;
}>();
</script>
<style lang="css"></style>