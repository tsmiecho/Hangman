package rest;

import com.google.api.server.spi.config.Api;
import com.google.api.server.spi.config.ApiMethod;
import com.google.api.server.spi.config.ApiNamespace;

import java.util.Locale;
import java.util.Random;
import java.util.ResourceBundle;

@Api(name = "myApi",
     version = "v1",
     namespace = @ApiNamespace(ownerDomain = "tsmiecho.appspot.com",
                               ownerName = "tsmiecho.appspot.com",
                               packagePath = ""))
public class PasswordCreator {

    @ApiMethod(name = "getPassword", httpMethod = "get")
    public Password createPassword() {
        Random rand = new Random();
        Password password = new Password();
        password.setPassword(getBundle(String.valueOf(rand.nextInt(10))));
        return password;
    }

    private String getBundle(String key) {
        ResourceBundle labels = ResourceBundle.getBundle("passwords", Locale.getDefault());
        return labels.getString(key);
    }

    /**
     * One filed yet.
     *
     * @author Tomasz Śmiechowicz
     */
    private class Password {

        private String password;

        @SuppressWarnings("unused")
        public String getPassword() {
            return password;
        }

        public void setPassword(String password) {
            this.password = password;
        }
    }
}
