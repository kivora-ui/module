# Roadmap de componentes

## Fundación (este spec)

- `Button`
- `Card` (`CardHeader`, `CardTitle`, `CardDescription`, `CardContent`,
  `CardFooter`)

## Próximas iteraciones (a definir con el usuario, sin spec todavía)

Cada componente nuevo sigue el mismo patrón que Button/Card: contrato de
variant/size en `@kivora/theme`, implementación en `@kivora/nextjs`
(Radix + CVA + `motion`) y en `@kivora/native` (primitivos RN + CVA +
`react-native-reanimated`), historia de Storybook, y verificación AA.
Candidatos típicos de un sistema tipo shadcn: `Input`, `Label`,
`Checkbox`, `Switch`, `Select`, `Dialog`, `Tooltip`, `Tabs`, `Badge`,
`Avatar`.
