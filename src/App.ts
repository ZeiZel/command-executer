import {ConsoleLogger} from "./out/console-logger/console-logger";
import {DirExecutor} from "./commands/dir/dir.executor";


export class App {
    async run() {
        // Либо мы можем подставить реализацию другой логики при первой необходимости
        await new DirExecutor(ConsoleLogger.getInstance()).execute();
    }
}

const app = new App();
app.run();