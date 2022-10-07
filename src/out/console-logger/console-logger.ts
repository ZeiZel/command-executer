import { IStreamLogger } from "../../core/handlers/stream-logger.interface";

// Реализация вывода в приложении - реализован через синглтон
export class ConsoleLogger implements IStreamLogger {
    // Хранит инстанс класса
    private static logger: ConsoleLogger;
    // Возвращает инстанс класса
    public static getInstance(): ConsoleLogger {
        // Если его нет, то создаёт
        if (!ConsoleLogger.logger) {
            ConsoleLogger.logger = new ConsoleLogger();
        }
        // Если есть, то вернёт имеющийся
        return ConsoleLogger.logger;
    }

    // Выводы результатов запросов:

    end(): void {
        console.log('Готово');
    }

    error(...args: any[]): void {
        console.log(...args);
    }

    log(...args: any[]): void {
        console.log(...args);
    }

}