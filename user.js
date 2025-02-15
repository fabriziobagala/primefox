/* ==========================================================
 *  PERFORMANCE SECTION
 * ========================================================== */

// GENERAL
user_pref("content.notify.interval", 100000);

// GFX
user_pref("gfx.canvas.accelerated.cache-items", 4096);
user_pref("gfx.canvas.accelerated.cache-size", 512);
user_pref("gfx.content.skia-font-cache-size", 20);

// DISK CACHE
user_pref("browser.cache.disk.enable", true);

// MEDIA CACHE
user_pref("media.memory_cache_max_size", 65536);
user_pref("media.cache_readahead_limit", 7200);
user_pref("media.cache_resume_threshold", 3600);

// IMAGE CACHE
user_pref("image.mem.decode_bytes_at_a_time", 32768);

// NETWORK
user_pref("network.http.max-connections", 1800);
user_pref("network.http.max-persistent-connections-per-server", 10);
user_pref("network.http.max-urgent-start-excessive-connections-per-host", 5);
user_pref("network.http.pacing.requests.enabled", false);
user_pref("network.dnsCacheExpiration", 3600);
user_pref("network.ssl_tokens_cache_capacity", 10240);

// SPECULATIVE LOADING
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true);
user_pref("network.prefetch-next", false);
user_pref("network.predictor.enabled", false);
user_pref("network.predictor.enable-prefetch", false);

/* ==========================================================
 *  PRIVACY SECTION
 * ========================================================== */

// TELEMETRY
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("browser.search.serpEventTelemetry.enabled",false);
user_pref("toolkit.shopping.ohttpConfigURL", "");
user_pref("toolkit.shopping.ohttpRelayURL", "");
user_pref("toolkit.telemetry.coverage.opt-out", true);
user_pref("toolkit.coverage.opt-out", true);
user_pref("toolkit.coverage.endpoint.base", "");

// STUDIES
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");

/* ==========================================================
 *  SECURITY SECTION
 * ========================================================== */

// DOH
user_pref("network.trr.mode", 5);
user_pref("network.trr.confirmationNS", "");

// HTTPS
user_pref("dom.security.https_first", true);
user_pref("dom.security.https_only_mode", true);

// OCSP
user_pref("security.OCSP.enabled", 0);

/* ==========================================================
 *  UI SECTION
 * ========================================================== */

// PASSWORDS
user_pref("signon.rememberSignons", false);
user_pref("signon.generation.enabled", false);
user_pref("signon.management.page.breach-alerts.enabled", false);
user_pref("signon.autofillForms", false);

// POCKET
user_pref("extensions.pocket.enabled", false);

// SANITIZE
user_pref("privacy.sanitize.sanitizeOnShutdown", true);

// STARTUP
user_pref("browser.startup.page", 1);

// SETTINGS
user_pref("browser.preferences.moreFromMozilla", false);
