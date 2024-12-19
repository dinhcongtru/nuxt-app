<template>
    <div class="input_search relative group inline-block hover:border-0">
        <Icon name="uil:search" style="font-size: 20px;color: #1C2430;" class="absolute left-4 top-1/2 translate-y-[-50%]" />
        <input class="input outline-none bg-gray-100 border border-solid border-gray-600 pl-12 pr-4  min-h-10 transition-all duration-200 w-[10.5rem] !rounded-[1.25rem] truncate" type="text" :name="props.name" :id="props.id" :value="props.modelValue" placeholder="Tìm Kiếm" @input="onChange" />
    </div>
</template>
<script lang="ts" setup>
const props = defineProps<{
    id?: string;
    name?:string;
    modelValue?: string
}>();

const emits = defineEmits(['update:modelValue']);

const onChangeEmit = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emits('update:modelValue', target.value);
}


const debounce = <T extends (...args: any[]) => void>(
  mainFunction: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timer: ReturnType<typeof setTimeout>;

  return (...args: Parameters<T>) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      mainFunction(...args);
    }, delay);
  };
};

const onChange = debounce(onChangeEmit, 500);


</script>
<style lang="css">
    
</style>