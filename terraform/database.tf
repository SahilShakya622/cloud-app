resource "azurerm_postgresql_flexible_server" "db" {
  name                   = "cloud-db-server"
  location               = var.location
  resource_group_name    = azurerm_resource_group.rg.name
  administrator_login    = "dbadmin"
  administrator_password = "Password@123"
  sku_name               = "B_Standard_B1ms"
}
