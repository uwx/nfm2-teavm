package fallk.logmaster;

//import static elemental2.dom.DomGlobal.console;

import java.util.Objects;
import java.util.logging.Level;
import java.util.logging.Logger;

public class HLogger {
    private static final Logger logger = Logger.getLogger("NameOfYourLogger");
    public static void info(Object... args) {
        logger.info(Objects.toString(args[0]));
//        console.info(args);
    }

    public static void error(Object... args) {
        logger.severe(Objects.toString(args[0]));
//        console.error(args);
    }

    public static void warn(Object... args) {
        logger.warning(Objects.toString(args[0]));
//        console.warn(args);
    }
}
