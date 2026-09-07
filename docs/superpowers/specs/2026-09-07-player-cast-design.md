# Player external playback

The native player gains opt-in Google Cast support using react-native-google-cast
4.9.1. Android example configuration initializes the SDK and exposes its route
picker. Remote playback must own transport while connected, preserve position
when handing back to local playback, and avoid simultaneous local audio.

The existing controller remains responsible for intro and explicit ad breaks.
Only HTTP(S) sources reachable by the receiver are eligible. Private offline
cache markers, local files, native DRM/custom headers and IMA tags require
receiver-specific support and must not silently lose protection or advertising.
Surface unsupported configurations rather than stripping their requirements.

AirPlay uses react-native-video's iOS external playback support. The repository
currently has no iOS example target and this Windows host cannot validate Apple
native integrations. CarPlay audio requires an iOS host and Apple entitlement;
Android Auto is a separate integration whose inclusion is being clarified.

Preserve all existing uncommitted downloads and intro work. Do not push or commit.
