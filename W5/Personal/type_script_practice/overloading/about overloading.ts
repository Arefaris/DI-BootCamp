// Сигнатуры:
function combine(a: number, b: number): number;
function combine(a: string, b: string): string;
function combine(a: string, b: number): string;
function combine(a: number, b: string): string;

// Реализация:
function combine(a: string | number, b: string | number): string | number {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; // сумма
  } else {
    return a.toString() + b.toString(); // конкатенация
  }
}



// Что дают сигнатуры в TypeScript?
// 1. 🧠 Подсказки для разработчика (автокомплит и типы)
// Когда ты пишешь combine(1, — редактор уже знает, какие типы ты можешь передать. Это упрощает работу и ускоряет кодинг.

// 2. 🛡️ Проверка типов на этапе компиляции
// Если ты передашь неправильные типы, TypeScript выдаст ошибку ещё до запуска:


// combine(true, "ok"); // ❌ Ошибка: аргумент boolean не подходит
// Без сигнатур ты бы не получил такую точную ошибку.

// 3. 📚 Чёткая документация прямо в коде
// Если кто-то другой (или ты сам через месяц) смотрит на функцию:

// function combine(a: number, b: number): number;
// function combine(a: string, b: string): string;
// Сразу видно: ага, функция умеет работать с числами и строками — и как именно.

// 4. ⚙️ Позволяет описать сложное поведение
// Иногда логика функции зависит от типа и количества аргументов. Сигнатуры помогают TypeScript'у понять эту логику и правильно вести себя.

// ⚠️ Без сигнатур было бы так:
// function combine(a: any, b: any): any {
//   return a + b;
// }
// Код работает, но нет типовой безопасности.

// Непонятно, что передавать и что возвращается.

// Редактор не помогает с автодополнением.

// Ошибки проявятся только во время выполнения.

// 🔚 Вывод
// Сигнатуры — это не просто "для красоты". Они:

// Улучшают читаемость

// Дают автодополнение

// Помогают отлавливать ошибки

// Делают код самодокументируемым

