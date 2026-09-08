require 'json'

package = JSON.parse(File.read(File.join(__dir__, 'package.json')))

Pod::Spec.new do |s|
  s.name = 'KivoraNative'
  s.version = package['version']
  s.summary = package['description']
  s.description = package['description']
  s.homepage = 'https://github.com/kivora/module'
  s.license = package['license'] || 'MIT'
  s.authors = package['author'] || 'Kivora'
  s.source = { :path => '.' }
  s.platforms = { :ios => '15.1' }
  s.source_files = 'ios/**/*.{h,m,mm,swift}'
  s.requires_arc = true
  s.swift_version = '5.0'

  s.dependency 'React-Core'
  s.dependency 'react-native-video'
end
