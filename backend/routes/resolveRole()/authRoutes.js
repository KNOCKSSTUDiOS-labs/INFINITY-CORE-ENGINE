function resolveRole(username) {
  const u = (username || "").toLowerCase().trim();

  if (u === "king knocks" || u === "king_knocks" || u === "king") {
    return ROLES.KING_KNOCKS;
  }

  if (u === "studio_ceo") {
    return ROLES.CEO;
  }

  if (u.includes("admin")) {
    return ROLES.ADMIN;
  }

  return ROLES.EMPLOYEE;
}
