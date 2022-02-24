import replace from "gulp-replace"; //поиск и замена
import browsersync from "browser-sync"; // локальный сервер
import newer from 'gulp-newer';  // Проверка обновления

export const plugins = {
    replace: replace,
    browsersync: browsersync,
    newer: newer
}