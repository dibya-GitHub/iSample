oks.java package com.boi.grp. hooks;

Simport
public class Hooks {
private static final String GLOBAL_CONFIG_PROPERTY = "src/test/java/com/boi/grp/globalconfig/GlobalConfig-properties"
private static final String ERROR_PROPERTY = "src/test/java/com/boi/grp/globalconfig/ErrorProp.properties'
private static final String END_POINT_PROPERTY = "src/test/java/com/boi/grp/globalconfig/EndpointProp.properties"
private DataBaseltil dbUtil;
public WebDriver driver;
// public AndroidDriver androidDriver;
public WebDriverWait wait;
public Logger logman;
public WebDriverManager driverManager;
public static Scenario testscenario;
public Properties globalConfig;
public static SoftAssertions softAssertions;
public FileInputStream FIS = null;
public Map<String, Map<String, String›> deserializeData;
public WebDriver engagementbuilderChromeDriver;
@Before
public void init(Scenario scenario) {
System.out.printIn("Hooks is Running) ;
testscenario = scenario;
System. setProperty ("ScenarioName", scenario. getName ()) ;
