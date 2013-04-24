require 'rake'
require 'open3'

desc 'Run test server'
task :run_server do
  exec 'node scripts/web-server.js'
end

task :default => [:run_server]