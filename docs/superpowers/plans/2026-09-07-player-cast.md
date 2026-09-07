# Player Cast Implementation Plan

> Use superpowers:subagent-driven-development for implementation and review.

**Goal:** Add working optional Cast transport and document Apple test prerequisites.

**Architecture:** Existing controller handles media sequencing; a Cast adapter
handles remote load/status/commands and local handoff. Android example configures
the SDK. Apple-only behavior remains explicitly unverified.

**Tech Stack:** React Native, react-native-video 6.19.2, react-native-google-cast 4.9.1.

**Spec:** ../specs/2026-09-07-player-cast-design.md

- [x] Implement optional Cast transport, player controls and meaningful tests.
- [x] Configure Android example and expose Cast demo availability.
- [x] Review AirPlay and CarPlay integration requirements and available host.
- [x] Run player tests, typecheck, lint, build and device checks available here.
- [x] Review changes and document verified behavior and remaining platform limits.

Device checks confirmed Cast discovery, DASH and HLS playback, intro/ad sequencing,
pause and seek through native receiver status. The phone entered a call before
the final disconnect visual check, so device interaction stopped. AirPlay has
source integration only; CarPlay and Android Auto remain separate native-host work.
