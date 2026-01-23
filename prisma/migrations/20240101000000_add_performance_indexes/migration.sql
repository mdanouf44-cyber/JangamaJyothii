-- Add performance indexes for better query performance

-- Products table indexes
CREATE INDEX IF NOT EXISTS "products_category_id_idx" ON "products"("category_id");
CREATE INDEX IF NOT EXISTS "products_is_active_idx" ON "products"("is_active");
CREATE INDEX IF NOT EXISTS "products_origin_country_idx" ON "products"("origin_country");
CREATE INDEX IF NOT EXISTS "products_name_search_idx" ON "products" USING gin(to_tsvector('english', "name"));
CREATE INDEX IF NOT EXISTS "products_description_search_idx" ON "products" USING gin(to_tsvector('english', "description"));
CREATE INDEX IF NOT EXISTS "products_price_idx" ON "products"("price_per_unit");
CREATE INDEX IF NOT EXISTS "products_created_at_idx" ON "products"("created_at");

-- RFQs table indexes
CREATE INDEX IF NOT EXISTS "rfqs_product_id_idx" ON "rfqs"("product_id");
CREATE INDEX IF NOT EXISTS "rfqs_status_idx" ON "rfqs"("status");
CREATE INDEX IF NOT EXISTS "rfqs_priority_idx" ON "rfqs"("priority");
CREATE INDEX IF NOT EXISTS "rfqs_assigned_to_idx" ON "rfqs"("assigned_to");
CREATE INDEX IF NOT EXISTS "rfqs_buyer_email_idx" ON "rfqs"("buyer_email");
CREATE INDEX IF NOT EXISTS "rfqs_buyer_country_idx" ON "rfqs"("buyer_country");
CREATE INDEX IF NOT EXISTS "rfqs_created_at_idx" ON "rfqs"("created_at");

-- Categories table indexes
CREATE INDEX IF NOT EXISTS "categories_slug_idx" ON "categories"("slug");
CREATE INDEX IF NOT EXISTS "categories_is_active_idx" ON "categories"("is_active");

-- Certificates table indexes
CREATE INDEX IF NOT EXISTS "certificates_type_idx" ON "certificates"("type");
CREATE INDEX IF NOT EXISTS "certificates_expiry_date_idx" ON "certificates"("expiry_date");
CREATE INDEX IF NOT EXISTS "certificates_is_active_idx" ON "certificates"("is_active");

-- Users table indexes
CREATE INDEX IF NOT EXISTS "users_email_idx" ON "users"("email");
CREATE INDEX IF NOT EXISTS "users_role_idx" ON "users"("role");
CREATE INDEX IF NOT EXISTS "users_is_active_idx" ON "users"("is_active");

-- Communication logs indexes
CREATE INDEX IF NOT EXISTS "communication_logs_type_idx" ON "communication_logs"("type");
CREATE INDEX IF NOT EXISTS "communication_logs_status_idx" ON "communication_logs"("status");
CREATE INDEX IF NOT EXISTS "communication_logs_user_id_idx" ON "communication_logs"("user_id");
CREATE INDEX IF NOT EXISTS "communication_logs_created_at_idx" ON "communication_logs"("created_at");

-- Audit logs indexes
CREATE INDEX IF NOT EXISTS "audit_logs_user_id_idx" ON "audit_logs"("user_id");
CREATE INDEX IF NOT EXISTS "audit_logs_action_idx" ON "audit_logs"("action");
CREATE INDEX IF NOT EXISTS "audit_logs_resource_idx" ON "audit_logs"("resource");
CREATE INDEX IF NOT EXISTS "audit_logs_created_at_idx" ON "audit_logs"("created_at");

-- Content table indexes
CREATE INDEX IF NOT EXISTS "content_key_idx" ON "content"("key");
CREATE INDEX IF NOT EXISTS "content_type_idx" ON "content"("type");
CREATE INDEX IF NOT EXISTS "content_status_idx" ON "content"("status");

-- Composite indexes for common queries
CREATE INDEX IF NOT EXISTS "products_category_active_idx" ON "products"("category_id", "is_active");
CREATE INDEX IF NOT EXISTS "rfqs_status_priority_idx" ON "rfqs"("status", "priority");
CREATE INDEX IF NOT EXISTS "rfqs_assigned_status_idx" ON "rfqs"("assigned_to", "status");