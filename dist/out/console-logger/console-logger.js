"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsoleLogger = void 0;
// Реализация вывода в приложении - реализован через синглтон
class ConsoleLogger {
    // Возвращает инстанс класса
    static getInstance() {
        // Если его нет, то создаёт
        if (!ConsoleLogger.logger) {
            ConsoleLogger.logger = new ConsoleLogger();
        }
        // Если есть, то вернёт имеющийся
        return ConsoleLogger.logger;
    }
    // Выводы результатов запросов:
    end() {
        console.log('Готово');
    }
    error(...args) {
        console.log(...args);
    }
    log(...args) {
        console.log(...args);
    }
}
exports.ConsoleLogger = ConsoleLogger;
