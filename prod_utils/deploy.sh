set -e

cd .. &&
mkdir prod &&
cd api &&
go build -o ../prod/server.exe cmd/server.go
